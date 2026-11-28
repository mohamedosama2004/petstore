export function formatCurrency(
  amount: number,
  locale: string = "en-SA",
  currency: string = "SAR",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}
