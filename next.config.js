/** @type {import('next').NextConfig} */
const nextConfig = {  
  reactStrictMode: true,

 // Add basePath
  basePath: '/github-pages',

  trailingSlash: true, 
  images: {
    domains: ['media.licdn.com'], // Add 'media.licdn.com' to the list of domains
  },
  output: {
    // Set the export target to static
    // This ensures that the app is exported as static HTML files
    target: 'static',
  },
};

module.exports = nextConfig;
