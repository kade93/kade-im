/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        largePageDataBytes: 256 * 1024, // Set threshold to 256kB
    },
};

export default nextConfig;
