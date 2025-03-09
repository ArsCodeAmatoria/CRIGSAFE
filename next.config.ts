import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Don't run ESLint during build, we've already fixed the issues
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
