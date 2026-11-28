import { ShippingZonesTable, ShippingCarrierSettings } from "@/features/admin/shipping";

export default function AdminShippingPage() {
  return (
    <main>
      <ShippingZonesTable />
      <ShippingCarrierSettings />
    </main>
  );
}
