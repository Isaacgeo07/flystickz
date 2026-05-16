/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flystickz.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },

  allowedDevOrigins: ['*'],
}

export default nextConfig