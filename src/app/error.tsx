"use client";

import { ErrorState } from "@/components/shared";

export interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  return <ErrorState message={error.message} />;
}
