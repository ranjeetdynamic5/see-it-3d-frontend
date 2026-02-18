export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category?: string;
};

export async function getAllPosts(): Promise<BlogPost[]> {
  // 🔁 Replace later with MDX / CMS / API
  return [
    {
      slug: "d5-render-3-workflow-shift",
      title: "D5 Render 3.0: not just an update – a workflow market shift",
      excerpt:
        "For years, rendering has been the final step – export, rebuild materials, tweak lighting… D5 changes that.",
      date: "2026-02-01",
      image: "/blog/d5-3.webp",
      category: "Blog",
    },
    {
      slug: "d5-render-webinar",
      title: "D5 Render 2.11 – Join Our Upcoming Webinar",
      excerpt:
        "Register here for Tuesday 2nd December – live on Zoom. Learn real-time visualization workflows.",
      date: "2025-11-11",
      image: "/blog/d5-webinar.webp",
      category: "Blog",
    },
    {
      slug: "sketchup-feedback-designs",
      title: "Turn feedback into final designs – seamlessly in SketchUp",
      excerpt: "",
      date: "2025-10-10",
      image: "/blog/sketchup-feedback.webp",
    },
    {
      slug: "back-to-work-offer",
      title: "Back to Work & Study – Your New Website Deal",
      excerpt: "",
      date: "2025-09-05",
      image: "/blog/back-to-work.webp",
    },
    {
      slug: "d5-ai-release",
      title: "D5 Render 2.11 Out With AI!",
      excerpt: "",
      date: "2025-08-18",
      image: "/blog/d5-ai.webp",
    },
  ];
}
