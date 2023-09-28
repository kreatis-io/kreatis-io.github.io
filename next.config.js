/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
