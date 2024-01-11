/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'AVBeheer.ceh',
    description: 'Workspace for Ethical Hacking.',
    icon: 'https://www.avbeheer.com/wp-content/uploads/2024/01/background-127001-av.png',
    listUrl: 'https://avbeheer.github.io/kasm-registry/',
    contactUrl: 'https://github.com/avbeheer/kasm-registry/issues',
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
