"use client";

import type { FormEvent } from "react";

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({
  placeholder = "Search products...",
  onSearch,
}: SearchBarProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = String(formData.get("q") ?? "").trim();
    onSearch?.(query);
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="flex items-center">
      <input
        type="search"
        name="q"
        placeholder={placeholder}
        aria-label={placeholder}
        className="h-9 w-full rounded-md border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:border-foreground"
      />
    </form>
  );
}
