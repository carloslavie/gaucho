const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: ['picsum.photos', 'drive.google.com'],
  },
}

module.exports = nextTranslate(nextConfig)
