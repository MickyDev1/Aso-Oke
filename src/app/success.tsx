"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Truck, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function CheckoutSuccessPage() {
  const [orderId] = useState(`ORD-${Math.floor(100000 + Math.random() * 900000)}`)
  const [orderDate] = useState(new Date().toLocaleDateString())
  const [estimatedDelivery] = useState(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString())

  useEffect(() => {
    // You could send analytics events here
    console.log("Order completed:", orderId)
  }, [orderId])

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold">Thank You for Your Order!</h1>
          <p className="text-gray-600 mt-2">Your order has been received and is now being processed.</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Order Number</p>
                <p className="font-medium">{orderId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{orderDate}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">Estimated Delivery</p>
              <p className="font-medium">{estimatedDelivery}</p>
            </div>

            <div className="pt-4">
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 bg-green-600 rounded-full">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="ml-2 text-sm font-medium">Order Placed</span>
                  </div>
                  <span className="text-xs text-gray-500">{orderDate}</span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                      <Package className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="ml-2 text-sm font-medium">Processing</span>
                  </div>
                  <span className="text-xs text-gray-500">1-7 business days</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                      <Truck className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="ml-2 text-sm font-medium">Shipped</span>
                  </div>
                  <span className="text-xs text-gray-500">{estimatedDelivery}</span>
                </div>

                <div className="absolute top-4 left-4 h-full w-0.5 bg-gray-200 -z-10"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We're preparing your order for shipment. You'll receive an email confirmation with tracking information
              once your order ships.
            </p>
            <p>
              If you have any questions about your order, please contact our customer service team at{" "}
              <a href="mailto:support@asooke.com" className="text-purple-600 hover:underline">
                support@asooke.com
              </a>
              .
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/products">
              Continue Shopping
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/account/orders">View Order History</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
