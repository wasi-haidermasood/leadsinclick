// src/data/blogs.ts

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export const CATEGORIES = [
  "All",
  "Strategy",
  "Content Creation",
  "SEO",
  "Design",
  "Analytics",
  "Email Marketing",
  "Brand Growth",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "let-it-campaigns-together",
    title: "Let It Campaigns Together!",
    excerpt: "Discover how collaborative marketing campaigns can double your organic reach.",
    category: "Strategy",
    author: "Sarah Jenkins",
    date: "Oct 24, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    content: `
      <p>In today's fast-paced digital landscape, running isolated marketing campaigns is no longer enough. Brands that collaborate and align their multi-channel strategies see exponential growth compared to those working in silos.</p>
      <h3>1. Aligning Your Core Message</h3>
      <p>Before launching any campaign, your strategy team and content creators must share a unified vision. Consistency across touchpoints builds trust and brand recall.</p>
      <h3>2. Leveraging Cross-Channel Analytics</h3>
      <p>By integrating data from social media, email marketing, and search engines, you can identify exactly where your audience engages most and double down on high-performing assets.</p>
      <blockquote>"Marketing is no longer about the stuff that you make, but about the stories you tell together."</blockquote>
      <p>Start small by unifying your weekly newsletter with your social media calendar, and watch your engagement metrics transform over the next quarter.</p>
    `,
  },
  {
    id: "2",
    slug: "video-marketing-caliber-bank",
    title: "Video Marketing Caliber Bank",
    excerpt: "Short-form and long-form video frameworks that convert viewers into loyal customers.",
    category: "Content Creation",
    author: "Elena Rostova",
    date: "Oct 20, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    content: `
      <p>Video marketing continues to dominate digital platforms. Whether it is a 15-second reel or a 20-minute deep dive webinar, video builds an immediate human connection.</p>
      <h3>The Hook, Retain, Reward Framework</h3>
      <p>Every high-converting video follows a simple structure: capture attention in the first 3 seconds, deliver structured value, and reward the viewer with a clear takeaway or actionable step.</p>
      <h3>Optimizing for Silent Viewing</h3>
      <p>Over 75% of mobile users watch videos on mute. Adding dynamic captions and visual storytelling elements ensures your message lands every single time.</p>
    `,
  },
  {
    id: "3",
    slug: "video-marketing-moderation",
    title: "Video Marketing Moderation",
    excerpt: "Managing brand safety, community comments, and audience sentiment at scale.",
    category: "SEO",
    author: "Marcus Vance",
    date: "Oct 18, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    content: `
      <p>Publishing great content is only half the battle. How you moderate and engage with the resulting conversation determines your long-term brand reputation and SEO signals.</p>
      <h3>Why Engagement Impacts Search Rankings</h3>
      <p>Modern search algorithms look at community interaction as a strong signal of content quality. Responding thoughtfully to comments increases dwell time and page authority.</p>
      <h3>Building Automated Guardrails</h3>
      <p>Use smart keyword filtering and community guidelines to keep discussions constructive without stifling authentic customer feedback.</p>
    `,
  },
  {
    id: "4",
    slug: "ad-community-building-custom-systems",
    title: "Ad Community Building Systems",
    excerpt: "Turn paid traffic into an engaged organic community using automated funnels.",
    category: "Analytics",
    author: "Claire Bennett",
    date: "Oct 12, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    content: `
      <p>Paid advertising costs are rising every year. The smartest brands aren't just buying clicks for one-time transactions; they are using ads to build permanent communities.</p>
      <h3>Lowering Customer Acquisition Cost (CAC)</h3>
      <p>When paid traffic is funneled into an active community hub, word-of-mouth referrals naturally drive down your blended acquisition costs.</p>
      <h3>Measuring Community ROI</h3>
      <p>Track cohort retention rates and lifetime value (LTV) between community members versus standard cold-traffic buyers to see the true impact.</p>
    `,
  },
  {
    id: "5",
    slug: "community-building-consulting",
    title: "Community Building Consulting",
    excerpt: "Expert strategies for scaling niche B2B and B2C brand ecosystems effortlessly.",
    category: "Brand Growth",
    author: "Hannah Abbott",
    date: "Oct 08, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    content: `
      <p>Building a loyal brand community requires more than just opening a group chat or forum. It takes intentional architecture, onboarding rituals, and consistent value delivery.</p>
      <h3>Identifying Your Super-Users</h3>
      <p>Every thriving community relies on the top 5% of engaged members. Empower them with early access, exclusive insights, and direct communication channels.</p>
      <h3>Scaling Without Losing Intimacy</h3>
      <p>As your audience grows into the thousands, introduce sub-channels and localized events so members still feel heard and valued.</p>
    `,
  },
];