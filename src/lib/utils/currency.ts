export function formatCurrency(
  amount: number,
  locale: string = "ar-SA-u-nu-latn",
  currency: string = "SAR",
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    ...options,
  }).format(amount);
}
