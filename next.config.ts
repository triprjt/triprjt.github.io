// next.config.js
const nextConfig = {
  // Optional: force revalidation of router cache on client after X seconds
  staleTimes: {
    dynamic: 30,     // seconds – client re-fetches dynamic routes
    static: 180,     // seconds – client re-fetches static pages
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate', // browser always checks freshness
          },
        ],
      },
      // Keep long cache for real static assets
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;