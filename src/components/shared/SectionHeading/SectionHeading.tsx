import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "start" | "center";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  align = "start",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      data-section-heading=""
      className={cn(
        "flex flex-col gap-5",
        centered ? "items-center text-center" : "items-start text-start sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className={cn("min-w-0", centered ? "max-w-2xl" : "max-w-2xl")}>
        {eyebrow ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-sage/40 bg-white/70 px-3 py-1 text-xs font-semibold text-forest">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            {eyebrow}
          </span>
        ) : null}
        <h2
          id={id}
          className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-forest sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-balance text-base leading-relaxed text-charcoal/65 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
