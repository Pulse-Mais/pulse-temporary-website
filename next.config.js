/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "6LedQHAsAAAAANfS1bPBkRS8KcjVoWphA8hP-Hxv",
  },
};

module.exports = nextConfig;
