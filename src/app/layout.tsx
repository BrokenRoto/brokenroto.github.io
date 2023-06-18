import { Footer } from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import "../styles/globals.css";

export const metadata = {
  title: "Roberto Cárdenas Portfolio",
  description: "This is a portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-primary text-secondary px-6 md:px-10 lg:px-20 xl:px-24 bg-gradient-to-r from-[#140f24] via-primary to-[#0d1d21] font-body scro">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
