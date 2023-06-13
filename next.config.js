/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env:{
    CID: process.env.NEXT_PUBLIC_CID,
    CSK: process.env.NEXT_PUBLIC_CSK
  },
  images: {
    domains: ['i.scdn.co'],
  },
}

module.exports = nextConfig;
