const API_KEY = process.env.MOVIE_API_KEY;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    // 실제로 다른 url로 보내는 것
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    // redirect but! url은 변하지 않음!
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id", // 여기서 :id 라고 했으면
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`, // 여기서도 :id라고 해주어야 함!
      },
    ];
  },
};

module.exports = nextConfig;
