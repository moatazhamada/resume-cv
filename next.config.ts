import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves from /resume-cv/ subdirectory
  basePath: '/resume-cv',
};

export default nextConfig;
