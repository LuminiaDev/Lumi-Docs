const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

module.exports = withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'ru-RU'],
    defaultLocale: 'en-US'
  }
})
