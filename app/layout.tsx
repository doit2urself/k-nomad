import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KoreaNomad - 한국 디지털 노마드 플랫폼',
  description: '한국에서 디지털 노마드 라이프를 시작하세요. 전국 주요 도시의 생생한 정보와 노마드들의 실제 후기를 한눈에',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}