/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' for Vercel deployment
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Removed unoptimized: true to allow Vercel to optimize images
  }
}

export default nextConfig
