export const metadata = {
  title: 'Roberto Cárdenas Portfolio',
  description: 'This is a portfolio built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
