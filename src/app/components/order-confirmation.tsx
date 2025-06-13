import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface OrderConfirmationEmailProps {
  orderNumber: string
  customerName: string
  orderDate: string
  shippingAddress: {
    line1: string
    line2?: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
  subtotal: number
  shipping: number
  tax: number
  total: number
}

export const OrderConfirmationEmail = ({
  orderNumber = "ORD-123456",
  customerName = "John Doe",
  orderDate = "June 11, 2024",
  shippingAddress = {
    line1: "123 Main St",
    line2: "Apt 4B",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "United States",
  },
  items = [
    {
      name: "Royal Blue Aso Oke",
      quantity: 1,
      price: 89.99,
    },
    {
      name: "Golden Thread Aso Oke",
      quantity: 2,
      price: 156.99,
    },
  ],
  subtotal = 403.97,
  shipping = 0,
  tax = 32.32,
  total = 436.29,
}: OrderConfirmationEmailProps) => {
  const formattedAddress = [
    shippingAddress.line1,
    shippingAddress.line2,
    `${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.postalCode}`,
    shippingAddress.country,
  ]
    .filter(Boolean)
    .join(", ")

  return (
    <Html>
      <Head />
      <Preview>Thank you for your order from Aso Oke Fabrics!</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto pt-5 pb-12">
            <Section className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <Row className="bg-purple-900 px-6 py-4">
                <Column>
                  <Heading className="text-white text-xl m-0">Aso Oke Fabrics</Heading>
                </Column>
                <Column align="right">
                  <Text className="text-white text-sm m-0">Order Confirmation</Text>
                </Column>
              </Row>

              {/* Main Content */}
              <Section className="px-6 py-8">
                <Heading as="h2" className="text-2xl font-bold mb-0">
                  Thank you for your order!
                </Heading>
                <Text className="text-gray-600 mt-1 mb-6">
                  Hi {customerName}, we've received your order and it's being processed.
                </Text>

                <Section className="bg-gray-50 rounded-lg px-6 py-4 mb-6">
                  <Row>
                    <Column>
                      <Text className="text-gray-500 text-sm m-0">Order Number</Text>
                      <Text className="font-medium m-0">{orderNumber}</Text>
                    </Column>
                    <Column>
                      <Text className="text-gray-500 text-sm m-0">Order Date</Text>
                      <Text className="font-medium m-0">{orderDate}</Text>
                    </Column>
                  </Row>
                </Section>

                <Heading as="h3" className="text-base font-bold mb-2">
                  Order Summary
                </Heading>

                {/* Order Items */}
                <Section className="mb-6">
                  {items.map((item, index) => (
                    <Row key={index} className="border-b border-gray-200 pb-2 mb-2">
                      <Column>
                        <Text className="m-0">{item.name}</Text>
                        <Text className="text-gray-500 text-sm m-0">Qty: {item.quantity}</Text>
                      </Column>
                      <Column align="right">
                        <Text className="font-medium m-0">${(item.price * item.quantity).toFixed(2)}</Text>
                      </Column>
                    </Row>
                  ))}
                </Section>

                {/* Order Totals */}
                <Section className="bg-gray-50 rounded-lg px-6 py-4 mb-6">
                  <Row>
                    <Column>
                      <Text className="m-0">Subtotal</Text>
                    </Column>
                    <Column align="right">
                      <Text className="m-0">${subtotal.toFixed(2)}</Text>
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text className="m-0">Shipping</Text>
                    </Column>
                    <Column align="right">
                      <Text className="m-0">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</Text>
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text className="m-0">Tax</Text>
                    </Column>
                    <Column align="right">
                      <Text className="m-0">${tax.toFixed(2)}</Text>
                    </Column>
                  </Row>
                  <Hr className="my-2" />
                  <Row>
                    <Column>
                      <Text className="font-bold m-0">Total</Text>
                    </Column>
                    <Column align="right">
                      <Text className="font-bold m-0">${total.toFixed(2)}</Text>
                    </Column>
                  </Row>
                </Section>

                <Heading as="h3" className="text-base font-bold mb-2">
                  Shipping Address
                </Heading>
                <Text className="text-gray-600 mb-6">{formattedAddress}</Text>

                <Hr className="my-6" />

                <Text className="mb-4">
                  If you have any questions about your order, please contact our customer service team at{" "}
                  <Link href="mailto:support@asooke.com" className="text-purple-600">
                    support@asooke.com
                  </Link>
                  .
                </Text>

                <Text className="text-sm text-gray-500">
                  Thank you for shopping with Aso Oke Fabrics. We appreciate your business!
                </Text>
              </Section>

              {/* Footer */}
              <Row className="bg-gray-100 px-6 py-4">
                <Column>
                  <Text className="text-sm text-gray-500 text-center m-0">
                    © 2024 Aso Oke Fabrics. All rights reserved.
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default OrderConfirmationEmail
