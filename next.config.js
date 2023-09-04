/** @type {import('next').NextConfig} */
const nextConfig = {  
  reactStrictMode: true,

  basePath: "/portfolio",

  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
  output: {
    // Set the export target to static
    // This ensures that the app is exported as static HTML files
    target: 'static',
  },
};

module.exports = nextConfig;
