import type { NextRequest } from 'next/server'
import { locales } from 'nextra/locales'

export function proxy(request: NextRequest) {
  return locales(request)
}
