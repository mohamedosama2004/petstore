"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          البريد الإلكتروني
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="بريدك الإلكتروني"
          required
          dir="ltr"
          className="h-12 min-w-0 flex-1 rounded-full border border-sage/40 bg-white px-5 text-start text-sm text-charcoal shadow-sm outline-none placeholder:text-charcoal/40 focus:border-forest sm:h-14"
        />
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-forest px-8 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90 active:translate-y-0 active:scale-[0.98] sm:h-14"
        >
          اشترك
        </button>
      </form>
      <p className="mt-4 text-xs text-charcoal/50" role="status" aria-live="polite">
        {submitted
          ? "هذا النموذج للعرض فقط، لم يُحفظ بريدك الإلكتروني."
          : "واجهة تجريبية للعرض فقط، لا تُحفظ البيانات أو تُرسل."}
      </p>
    </>
  );
}
