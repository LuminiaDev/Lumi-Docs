import { ThemeProvider } from 'next-themes'
import { SkipNavLink } from 'nextra/components'
import { z } from 'zod'
import { MobileNav } from '../../node_modules/nextra-theme-docs/dist/components/sidebar'
import { LayoutPropsSchema } from '../../node_modules/nextra-theme-docs/dist/schemas'
import {
  ConfigProvider,
  ThemeConfigProvider
} from '../../node_modules/nextra-theme-docs/dist/stores'
import type { ReactNode } from 'react'

type FixedLayoutProps = {
  children: ReactNode
  [key: string]: unknown
}

export function FixedLayout(props: FixedLayoutProps) {
  const { data, error } = LayoutPropsSchema.safeParse(props)
  if (error) {
    throw z.prettifyError(error)
  }

  const { footer, navbar, pageMap, nextThemes, banner, children, ...rest } =
    data

  return (
    <ThemeConfigProvider value={rest}>
      <ThemeProvider {...nextThemes}>
        <SkipNavLink />
        {banner}
        <ConfigProvider pageMap={pageMap} navbar={navbar} footer={footer}>
          <MobileNav />
          {children}
        </ConfigProvider>
      </ThemeProvider>
    </ThemeConfigProvider>
  )
}
