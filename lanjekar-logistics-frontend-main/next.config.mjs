/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms-lanjekarlogistics.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "192.168.100.126",
        pathname: "**",
      },
    ],
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(node)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
