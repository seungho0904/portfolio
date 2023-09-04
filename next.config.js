/** @type {import('next').NextConfig} */
const nextConfig = {  
};
  
module.exports = {
    images: {
      domains: ['media.licdn.com'], // Add 'media.licdn.com' to the list of domains
    },
  output: {
    // Set the export target to static
    // This ensures that the app is exported as static HTML files
    target: 'static',
    // Other Next.js configuration options...
  }; 
