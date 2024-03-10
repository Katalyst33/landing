/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
  },

  env: {
    companyName: 'Katalyst Technologies',
    serverUrl: 'http://localhost:5700',
    apiUrl: 'http://localhost:5700/api',
  },
};

module.exports = nextConfig;
