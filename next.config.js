/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: "",
  env: {
    basePath: "",
  },
  compiler: {
    styledComponents: { ssr: true, displayName: true },
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
