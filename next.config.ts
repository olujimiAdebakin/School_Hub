import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com"], // Add the allowed domain here
  },
};

export default nextConfig;
