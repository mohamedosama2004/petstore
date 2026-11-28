import { StoreSettingsForm, TaxCurrencySettings } from "@/features/admin/settings";

export default function AdminSettingsPage() {
  return (
    <main>
      <StoreSettingsForm />
      <TaxCurrencySettings />
    </main>
  );
}
