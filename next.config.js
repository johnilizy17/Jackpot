/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  webpack(config) {
    // 🚫 Ignore Coinbase's @base-org/account package
    config.resolve.alias['@base-org/account'] = false
    return config
  },
}

module.exports = nextConfig
