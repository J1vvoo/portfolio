import '@/assets/scss/style.scss'

export const metadata = {
  title: 'JW Page',
  description: "Jiwoo's Portfolio",
  keywords: ['포트폴리오', 'portfolio', 'next.js'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  )
}
