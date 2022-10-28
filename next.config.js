/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'cdn.sanity.io', 'staticdelivery.nexusmods.com'],
  },
}


module.exports = {
  images: {
    domains: ['staticdelivery.nexusmods.com','s2.coinmarketcap.com', 's3.coinmarketcap.com', 'cdn.sanity.io', 'encrypted-tbn0.gstatic.com']
  },

  nextConfig
}
