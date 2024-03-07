/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },

  env: {
    companyName: 'Katalyst Technologies',
    serverUrl: 'http://localhost:5004',
  },
};

module.exports = nextConfig;
