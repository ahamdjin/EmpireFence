/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingExcludes: {
    "*": [".next/cache/**/*"],
  },
};

export default nextConfig;
