import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default async function OurNewsSection() {
  const posts = await getAllPosts();

  const featured = posts.slice(0, 2);
  const recent = posts.slice(2);

  return (
    <section className="bg-[#f4f8fb] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[#0b2a4a] mb-2">Our News</p>
          <div className="w-12 h-[2px] bg-red-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b2a4a]">
            Stay Updated with Latest News
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Explore our News section to stay informed about the latest
            advancements in 3D design and technology.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* LEFT – Featured */}
          <div className="lg:col-span-2 grid gap-10 sm:grid-cols-2">
            {featured.map((post) => (
              <article key={post.slug}>
                <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-5">
                  <Image
                    src={post.image || "/placeholder.webp"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded">
                    {post.category || "Blog"}
                  </span>
                </div>

                <h3 className="font-semibold text-[#0b2a4a] text-lg mb-1">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs text-gray-400 mb-3">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-red-500 text-sm font-medium"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>

          {/* RIGHT – Recent News */}
          <aside className="bg-white rounded-xl shadow-md p-6">
            <h4 className="font-semibold text-[#0b2a4a] mb-6">
              Recent News
            </h4>

            <div className="space-y-5">
              {recent.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex gap-4 items-start"
                >
                  <div className="relative w-[70px] h-[70px] flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.webp"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-sm text-[#0b2a4a] leading-snug">
                    {post.title}
                  </p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
