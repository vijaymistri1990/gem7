import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-php-res-bucket-ap-south-1.s3.ap-south-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'ddhp34p0t73zc.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com',
      }
    ],
  },
};

export default nextConfig;
