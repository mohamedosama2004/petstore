import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-zinc-200 bg-background p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
