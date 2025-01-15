import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'r3suprimentos.agilecdn.com.br',
            port: '',
            pathname: '/**',
        },
    ],
  }
};

export default nextConfig;
