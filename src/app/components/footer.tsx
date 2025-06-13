import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Aso Oke Fabrics</h3>
            <p className="text-gray-300">
              Premium authentic Nigerian Aso Oke fabrics, handwoven with traditional craftsmanship for modern elegance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/products" className="block text-gray-300 hover:text-white">
                All Products
              </Link>
              <Link href="/categories" className="block text-gray-300 hover:text-white">
                Categories
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white">
                Contact
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-white">
                Blog
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <div className="space-y-2">
              <Link href="/shipping" className="block text-gray-300 hover:text-white">
                Shipping Info
              </Link>
              <Link href="/returns" className="block text-gray-300 hover:text-white">
                Returns & Exchanges
              </Link>
              <Link href="/size-guide" className="block text-gray-300 hover:text-white">
                Size Guide
              </Link>
              <Link href="/faq" className="block text-gray-300 hover:text-white">
                FAQ
              </Link>
              <Link href="/support" className="block text-gray-300 hover:text-white">
                Support
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">
                  Undisclosed
                  <br />
                  Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">+234 803 351 9937</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">oladeleolukemi@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Aso Oke Fabrics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
