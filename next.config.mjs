import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true
})

export default withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'ru-RU'],
    defaultLocale: 'en-US'
  }
})
