/** @type {import('next').NextConfig} */
const nextConfig = {  
  trailingSlash: true, 
  images: {
    domains: ['media.licdn.com'], // Add 'media.licdn.com' to the list of domains
  },
  output: "export",
};

module.exports = nextConfig;
