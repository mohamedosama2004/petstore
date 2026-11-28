import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { Container } from "../Container";

export interface AnnouncementBarProps {
  message?: string;
  className?: string;
}

export function AnnouncementBar({
  message = siteConfig.announcementAr,
  className,
}: AnnouncementBarProps) {
  return (
    <div
      className={cn("bg-forest py-2 text-cream", className)}
      role="status"
      aria-live="polite"
    >
      <Container className="text-center text-[11px] font-medium leading-relaxed sm:text-xs">
        {message}
      </Container>
    </div>
  );
}
