/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
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
    assetPrefix: isProduction ? "/dylanhoover.github.io/" : undefined,
    basePath: isProduction ? "/dylanhoover.github.io" : undefined,
};

export default nextConfig;
