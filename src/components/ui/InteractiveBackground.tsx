"use client";

import { useEffect, useRef } from "react";

type RGB = [number, number, number];

// Module-level constants keep the default colours referentially stable
const BRAND_MAIN: RGB = [0.72, 0.945, 0.21]; // #b8f135
const BRAND_DEEP: RGB = [0.1, 0.24, 0.06];
const BASE_DARK: RGB = [0.02, 0.025, 0.03];

export interface InteractiveBackgroundProps {
  /** Main glow colour, RGB 0–1 */
  colorA?: RGB;
  /** Secondary glow colour, RGB 0–1 */
  colorB?: RGB;
  /** Base background colour, RGB 0–1 */
  background?: RGB;
  /** Glow strength (0 to about 1.5) */
  intensity?: number;
  /** Flow speed multiplier */
  speed?: number;
  className?: string;
}

const VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_hover;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform vec3 u_bg;
uniform float u_intensity;

vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float snoise(vec2 p) {
  const float K1 = 0.366025404;
  const float K2 = 0.211324865;
  vec2 i = floor(p + (p.x + p.y) * K1);
  vec2 a = p - i + (i.x + i.y) * K2;
  float m = step(a.y, a.x);
  vec2 o = vec2(m, 1.0 - m);
  vec2 b = a - o + K2;
  vec2 c = a - 1.0 + 2.0 * K2;
  vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
  vec3 n = h * h * h * h * vec3(
    dot(a, hash2(i)),
    dot(b, hash2(i + o)),
    dot(c, hash2(i + 1.0))
  );
  return dot(n, vec3(70.0));
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * snoise(p);
    p = p * 2.03 + vec2(11.7, 7.3);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float aspect = u_res.x / u_res.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  vec2 m = vec2(u_mouse.x * aspect, u_mouse.y);

  float t = u_time * 0.06;
  vec2 d = p - m;
  float glow = exp(-dot(d, d) * 2.5) * u_hover;

  // Domain warp: the flow bends toward the pointer (or the drifting spot on mobile)
  vec2 q = vec2(fbm(p * 1.1 + t), fbm(p * 1.1 + vec2(5.2, 1.3) - t));
  vec2 w = p + q * 0.6 - d * glow * 0.5;
  float f = fbm(w * 1.4 + vec2(t * 0.8, -t * 0.5));

  float body = smoothstep(-0.3, 0.5, f);
  float core = smoothstep(0.15, 0.6, f + glow * 0.4);

  vec3 col = u_bg;
  col = mix(col, u_colorB, body * 0.9);
  col = mix(col, u_colorA, core * u_intensity);
  col += u_colorA * glow * 0.15 * u_intensity;

  // Subtle film grain
  float grain = fract(
    sin(dot(gl_FragCoord.xy + mod(u_time, 100.0) * 7.0, vec2(12.9898, 78.233))) * 43758.5453
  );
  col += (grain - 0.5) * 0.03;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

const IDLE_MS = 2500; // after this long without mouse movement, the background drifts on its own
const PIXEL_BUDGET = 360_000; // caps shader work; the browser upscales the canvas smoothly

export default function InteractiveBackground({
  colorA = BRAND_MAIN,
  colorB = BRAND_DEEP,
  background = BASE_DARK,
  intensity = 0.9,
  speed = 1,
  className = "",
}: InteractiveBackgroundProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const host = wrap.parentElement ?? wrap;

    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // One oversized triangle covers the whole screen
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uniform = (name: string) => gl.getUniformLocation(program, name);
    const uRes = uniform("u_res");
    const uTime = uniform("u_time");
    const uMouse = uniform("u_mouse");
    const uHover = uniform("u_hover");
    gl.uniform3f(uniform("u_colorA"), ...colorA);
    gl.uniform3f(uniform("u_colorB"), ...colorB);
    gl.uniform3f(uniform("u_bg"), ...background);
    gl.uniform1f(uniform("u_intensity"), intensity);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(hover: none)").matches;

    // Pointer state, in 0–1 coordinates relative to the hero
    const pointer = { x: 0.5, y: 0.5, last: -Infinity };

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const r = host.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) return;
      pointer.x = (e.clientX - r.left) / r.width;
      pointer.y = 1 - (e.clientY - r.top) / r.height;
      pointer.last = performance.now();
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const resize = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (!w || !h) return;
      const scale = Math.min(1, Math.sqrt(PIXEL_BUDGET / (w * h)));
      canvas.width = Math.max(1, Math.round(w * scale));
      canvas.height = Math.max(1, Math.round(h * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    const cur = { x: 0.5, y: 0.5, hover: 0 };
    let time = 0;
    let last = performance.now();
    let raf = 0;
    let visible = true;

    const frame = (now: number) => {
      raf = 0;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      time += dt * speed;

      const idle = coarse || now - pointer.last > IDLE_MS;

      // Idle (mobile or no mouse): a slow Lissajous path moves the glow around
      const goalX = idle ? 0.5 + 0.3 * Math.sin(time * 0.35) : pointer.x;
      const goalY = idle ? 0.5 + 0.2 * Math.sin(time * 0.7) : pointer.y;
      const goalHover = idle ? 0.7 : 1;

      const ease = 1 - Math.pow(0.02, dt);
      cur.x += (goalX - cur.x) * ease;
      cur.y += (goalY - cur.y) * ease;
      cur.hover += (goalHover - cur.hover) * (1 - Math.pow(0.1, dt));

      gl.uniform1f(uTime, time);
      gl.uniform2f(uMouse, cur.x, cur.y);
      gl.uniform1f(uHover, cur.hover);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      if (visible && !reduce) raf = requestAnimationFrame(frame);
    };

    const kick = () => {
      if (!raf && visible) raf = requestAnimationFrame(frame);
    };

    resize();
    kick();

    // Redraw on size changes
    const ro = new ResizeObserver(() => {
      resize();
      kick();
    });
    ro.observe(wrap);

    // Pause rendering when the hero is off-screen
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) kick();
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, [colorA, colorB, background, intensity, speed]);

  return (
    <div
      ref={wrapRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
        style={{
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />
    </div>
  );
}