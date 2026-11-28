import { OrdersFilterBar, OrdersTable } from "@/features/admin/orders";

export default function AdminOrdersPage() {
  return (
    <main>
      <OrdersFilterBar />
      <OrdersTable />
    </main>
  );
}
