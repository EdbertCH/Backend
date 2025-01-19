import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
      remotePatterns: [
          {
              protocol: 'http',
              hostname: 'localhost',
              port: '3000',
              pathname: '/gambar/**',  // Allows all images from /gambar directory on localhost
          },
          {
              protocol: 'https',
              hostname: 'www.freepik.com',
              pathname: '/**',         // Allows all paths under Freepik
              },
          {
              protocol: 'https',
              hostname: 'www.shutterstock.com',
              pathname: '/**',         // Allows all paths under Shutterstock
          },  
          {
              protocol: 'http',
              hostname: 'localhost',
              port: '8001',
              pathname: '/**',
          },  
        ],
    },
};

export default nextConfig;
