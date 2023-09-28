/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-profile-summary-cards.vercel.app",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
