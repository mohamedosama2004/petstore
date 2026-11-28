import { StatsGrid, SalesSummary, RecentOrdersTable } from "@/features/admin/overview";

export default function AdminOverviewPage() {
  return (
    <main>
      <StatsGrid />
      <SalesSummary />
      <RecentOrdersTable />
    </main>
  );
}
