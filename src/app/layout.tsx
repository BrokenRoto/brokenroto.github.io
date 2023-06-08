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
    <html lang="en">
      <body className="bg-primary text-secondary  bg-gradient-to-r from-[#140f24] via-primary to-[#0d1d21] font-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
