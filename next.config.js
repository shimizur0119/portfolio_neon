const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
    @use "base/config.scss" as *;
    @use "base/mixin.scss" as *;
    `
  }
}

module.exports = nextConfig
