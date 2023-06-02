/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
  unoptimized: true,
    domains: ['https://upload.wikimedia']
  },
}

module.exports = nextConfig