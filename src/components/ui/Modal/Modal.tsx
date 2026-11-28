import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Modal({ isOpen, title, children, className }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <div
        className={cn(
          "w-full max-w-lg rounded-lg bg-background p-6 shadow-lg",
          className,
        )}
      >
        {title ? <h2 className="mb-4 text-lg font-semibold">{title}</h2> : null}
        {children}
      </div>
    </div>
  );
}
