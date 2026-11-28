import { siteConfig } from "@/config";
import { Container } from "../Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-600 sm:flex-row">
        <p>{siteConfig.name}</p>
        <p>{siteConfig.description}</p>
      </Container>
    </footer>
  );
}
