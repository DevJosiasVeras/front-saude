/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logospng.org',
        port: '',
        pathname: '/download/**'
      }
    ]
  }
}

module.exports = nextConfig
