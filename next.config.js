/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Netlify deployment optimizations
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    // Handle asset prefix for static export
    assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

module.exports = nextConfig;
