import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Also ignore TypeScript errors during build
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
