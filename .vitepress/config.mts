import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  
  title: "Lumi",
  description: "A sunshine between dark Minecraft Bedrock clouds. Drop-in replacement for Nukkit.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    aside: false,
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' }
    ],

    sidebar: [
      { text: 'Introduction', link: '/docs/' },
      { text: 'Setup multiversion', link: '/docs/multiversion' },
      {
        text: 'Getting started',
        items: [
          { text: 'Documentation', link: 'doxbin' },
          { text: 'Runtime API Examples', link: 'api-examples' }
        ]
      },
      {
        text: 'For developers',
        collapsed: true,
        items: [
          { text: 'Create a Command', link: '/docs/custom-commands' },
          { text: 'Create a Listener', link: '/docs/listener' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KoshakMineDEV/Lumi' }
    ]
  },
  locales: {
    root: {
      label: '🇬🇧 English',
      lang: 'en'
    },
    ru: {
      label: '🇷🇺 Русский',
      lang: 'ru',
      link: '/ru' 
    }
  }
})
