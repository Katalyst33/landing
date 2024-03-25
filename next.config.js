/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
  },

  env: {
    companyName: 'Katalyst Technologies',
    serverUrl: process.env.SERVER_URL,
    apiUrl: `${process.env.SERVER_URL}/api`,
  },
};

module.exports = nextConfig;
