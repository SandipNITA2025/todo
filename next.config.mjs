// next.config.js
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://plain-shorts-dove.cyclic.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
