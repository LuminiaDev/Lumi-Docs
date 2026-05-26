import type { Metadata } from 'next'
import { Footer, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import 'nextra-theme-docs/style.css'
import { FixedLayout } from '../_components/fixed-layout'

export const metadata: Metadata = {
  title: {
    absolute: '',
    template: '%s - Lumi Docs'
  },
  description:
    'Official documentation for Lumi, a drop-in replacement for Nukkit.',
  applicationName: 'Lumi Docs'
}

type LayoutProps = Readonly<{
  children: ReactNode
  params: Promise<{
    lang: string
  }>
}>

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params
  const pageMap = await getPageMap(`/${lang}`)

  const navbar = (
    <Navbar
      logo={<span>Lumi Docs</span>}
      projectLink="https://github.com/KoshakMineDEV/Lumi"
    />
  )

  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Lumi Documentation" />
        <meta
          property="og:description"
          content="Official documentation for Lumi, a drop-in replacement for Nukkit."
        />
      </Head>
      <body>
        <FixedLayout
          navbar={navbar}
          footer={<Footer>MIT {new Date().getFullYear()} © Lumi Documentation</Footer>}
          docsRepositoryBase="https://github.com/LuminiaDev/Lumi-Docs"
          i18n={[
            { locale: 'en-US', name: 'English' },
            { locale: 'ru-RU', name: 'Русский' }
          ]}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          navigation={{ prev: true, next: true }}
          editLink="Edit this page on GitHub"
          pageMap={pageMap}
        >
          {children}
        </FixedLayout>
      </body>
    </html>
  )
}
