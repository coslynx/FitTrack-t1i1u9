/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  sentry: {
    disableServerSide: process.env.NODE_ENV !== 'production',
  },
};

module.exports = nextConfig;