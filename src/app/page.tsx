import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      {/* ✅ FIX: Prevent horizontal overflow globally */}
      <style>{`
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
          margin: 0;
          padding: 0;
        }
      `}</style>

      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[80] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>

      {/* ✅ FIX: Constrain main to viewport width */}
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <SocialProof />
        <Services />
        <CaseStudies />
        <Testimonials />
        <FAQ />
      </main>
    </>
  );
}