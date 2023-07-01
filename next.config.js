/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "image.cine21.com",
      },
      {
        protocol: "https",
        hostname: "file.mk.co.kr",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "cdn.imweb.me",
      },
    ],
  },
};
