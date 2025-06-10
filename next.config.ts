import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'www.calstatelausu.org', pathname: '/_next/image'},
    ],
  },
};

export default nextConfig;
