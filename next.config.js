/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CONTACT_CAPTCHA_SITEKEY: "6LfdRMgnAAAAAG3qehULkgsEkeEc6KSx0JswCsdB",
    API_KEY: "http://localhost:5000/api/v1",
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
