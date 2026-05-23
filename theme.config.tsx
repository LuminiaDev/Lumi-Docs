import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Lumi Docs</span>,
  project: {
    link: 'https://github.com/KoshakMineDEV/Lumi'
  },
  docsRepositoryBase: 'https://github.com/LuminiaDev/Lumi-Docs',
  footer: {
    text: `MIT ${new Date().getFullYear()} © Lumi Documentation`
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'ru-RU', text: 'Русский' }
  ],
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Lumi Docs'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Lumi Documentation" />
      <meta property="og:description" content="Official documentation for Lumi, a drop-in replacement for Nukkit." />
    </>
  ),
  navigation: {
    prev: true,
    next: true
  },
  feedback: {
    content: 'Found a problem? Send feedback',
    labels: 'feedback'
  },
  editLink: {
    text: 'Edit this page on GitHub'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
}

export default config
