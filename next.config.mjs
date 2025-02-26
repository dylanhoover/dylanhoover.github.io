/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";


const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    assetPrefix: isProduction ? "/dylanhoover.github.io/" : undefined,
    basePath: isProduction ? "/dylanhoover.github.io" : undefined,
    output: "export",
};

export default nextConfig;
