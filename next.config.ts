/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es', 'fr', 'jp', 'zh'],
    defaultLocale: 'en',
    localeDetection: true,
  },
};

module.exports = nextConfig;
