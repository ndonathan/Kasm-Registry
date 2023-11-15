/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies - NDonathan',
    description: 'Kasm workspaces from linuxserver.io, kasmtech, and custom images',
    icon: '/img/logo.svg',
    listUrl: 'https://ndonathan.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
