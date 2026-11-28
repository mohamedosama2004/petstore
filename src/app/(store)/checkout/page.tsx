import { ShippingAddressForm, DeliveryMethodSelector, PaymentMethodSelector, OrderSummary } from "@/features/checkout";

export default function CheckoutPage() {
  return (
    <main>
      <ShippingAddressForm />
      <DeliveryMethodSelector />
      <PaymentMethodSelector />
      <OrderSummary />
    </main>
  );
}
