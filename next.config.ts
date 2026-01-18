import type { NextConfig } from "next";


if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error("ANTHROPIC_API_KEY environment variable is required");
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;