// Example config for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/vercel/next.js/tree/canary/packages/next-mdx
const withPWA = require('next-pwa');
const prod = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa:{
    dest:'public'
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
});
