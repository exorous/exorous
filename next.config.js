/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes
  // If you need static export later, you'll need a different approach for file uploads

  images: { unoptimized: true },
  transpilePackages: ['three'],
};

module.exports = nextConfig;