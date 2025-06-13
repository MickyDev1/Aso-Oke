import Link from "next/link"
import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Star, ShoppingCart, Heart, Truck, Shield, Headphones } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Royal Blue Aso Oke",
    price: 89.99,
    originalPrice: 120.0,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 24,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Golden Thread Aso Oke",
    price: 156.99,
    originalPrice: 200.0,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 18,
    badge: "Premium",
  },
  {
    id: 3,
    name: "Traditional Green Aso Oke",
    price: 75.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 32,
    badge: "New",
  },
  {
    id: 4,
    name: "Burgundy Wedding Aso Oke",
    price: 134.99,
    originalPrice: 180.0,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 15,
    badge: "Limited",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">Authentic Nigerian Fabrics</Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Premium Aso Oke
                  <span className="block text-yellow-400">Fabrics</span>
                </h1>
                <p className="text-xl text-gray-200 max-w-lg">
                  Discover our exquisite collection of handwoven Aso Oke fabrics. Traditional craftsmanship meets modern
                  elegance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Shop Collection
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Beautiful Aso Oke Fabric"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Worldwide Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $100. Fast and secure delivery worldwide.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                {/* <Shield className="w-8 h-8 text-green-600" /> */}
              </div>
              <h3 className="text-xl font-semibold">Authentic Quality</h3>
              <p className="text-gray-600">100% authentic handwoven Aso Oke fabrics with quality guarantee.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                {/* <Headphones className="w-8 h-8 text-purple-600" /> */}
              </div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600">Expert customer service to help you choose the perfect fabric.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked selection of our finest Aso Oke fabrics, perfect for special occasions and everyday elegance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-red-500">{product.badge}</Badge>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                    </div>

                    <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>

                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>

                    <Button className="w-full" asChild>
                      <Link href={`/products/${product.id}`}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest collections, exclusive offers, and fabric care tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-black" />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
