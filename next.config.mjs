/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        port: '',
        pathname: '/images/**'
      },
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
        port: '',
        pathname: '**'
      }
    ]
  }
}

export default nextConfig
