/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Required for static exports to preserve routes like /about/
};

module.exports = nextConfig;
