const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.calstatelausu.org",
        pathname: "/_next/image",
      },
      {
        protocol: "https",
        hostname: "bubqscxokeycpuuoqphp.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;