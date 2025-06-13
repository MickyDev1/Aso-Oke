import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "../app/components/header"
import { Footer } from "../app/components/footer"
import { CartProvider } from "../app/components/cart-provider"
// import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aso Oke Fabrics - Premium Nigerian Textiles",
  description: "Discover authentic handwoven Aso Oke fabrics. Traditional craftsmanship meets modern elegance.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          {/* <Toaster /> */}
        </CartProvider>
      </body>
    </html>
  )
}
