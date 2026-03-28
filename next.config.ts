import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nps.gov',
        port: '',
        pathname: '/npgallery/**',
      },
    ],
  },
};

export default nextConfig;
