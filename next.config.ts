import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lightseagreen-reindeer-544703.hostingersite.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
