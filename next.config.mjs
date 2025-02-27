/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    output: "export",
    trailingSlash: true,
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
