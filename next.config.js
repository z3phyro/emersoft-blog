/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "fakeimg.pl",
      },
    ],
  },
};

module.exports = nextConfig;
