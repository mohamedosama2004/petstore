import type { ReactNode } from "react";
import { AnnouncementBar, Footer, Header } from "@/components/shared";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
