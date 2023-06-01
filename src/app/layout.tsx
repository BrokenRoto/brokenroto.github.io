import { Footer } from "@/components/common/footer"
import { Navbar } from "@/components/common/navbar"

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
