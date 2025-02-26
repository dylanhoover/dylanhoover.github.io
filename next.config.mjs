/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    basePath: "/dylanhoover.github.io",
    assetPrefix: "/dylanhoover.github.io/",
    output: "export",
    trailingSlash: true,
};

export default nextConfig;
