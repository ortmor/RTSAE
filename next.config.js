/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
  CONTACT_CAPTCHA_SECRET:"6LcLS8gnAAAAANS4TjOlgYfg61ZJLHEHpBH72NX0",
  },
  // Adding policies:
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Content-Security-Policy",
            value: "",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Server",
            value: "nginx",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

// default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';
