// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['loremflickr.com', 'media.graphassets.com'],
  },
  // basePath: '.',
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));

    return config;
  },
};

module.exports = nextConfig;
