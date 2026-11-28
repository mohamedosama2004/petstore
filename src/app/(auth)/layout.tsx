import type { ReactNode } from "react";
import { Container } from "@/components/shared";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center py-12">
      <Container className="max-w-md">{children}</Container>
    </main>
  );
}
