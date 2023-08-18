/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // env: {
  //   SALES_ENQUIRY_EMAIL_ID: "info@rts.ae",
  //   SUPPORT_EMAIL_ID: "service.support@rts.ae",
  //   RTS_USERNAME:
  //     "5ca3a96aaed87c2987a97503cbb34d5aed08b15ff09c1e1f0ef250acfe1358371af367805203313ebe452cf3997d26d7a07bfbbae64054c7473fdab3a61027ef",
  //   RTS_PASSWORD:
  //     "8bf76950ec7456e2d160cd271df0c4e095cbf2937370ca3984541704b3b460dd91038a5f136e80b72a98b3e8eafdf719e53b92c7c7d93253d2e0c538ff0d08c9",
  //   MAIL_SERVICE_HOST: "smtp.office365.com",
  //   MAIL_SERVICE_PORT: "25",
  //   MAIL_AUTH_USER: "test.rtsweb@rtsit.ae",
  //   MAIL_AUTH_PASS: "Dubai@2020$",
  //   MAIL_AUTH_NAME: "RTS",
  // },
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
