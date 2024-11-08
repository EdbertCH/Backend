// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
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
        hostname: 'www.shutterstock.com',
        pathname: '/**',         // Allows all paths under Shutterstock
      },
    ],
  },
};

export default nextConfig;
