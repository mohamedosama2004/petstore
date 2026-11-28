import Link from "next/link";
import { routes, siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { PawIcon } from "../Icons";

export interface BrandMarkProps {
  className?: string;
  inverted?: boolean;
  asLink?: boolean;
}

export function BrandMark({
  className,
  inverted = false,
  asLink = false,
}: BrandMarkProps) {
  const content = (
    <>
      <span
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-transform duration-300",
          inverted
            ? "bg-cream text-forest group-hover:rotate-[-8deg]"
            : "bg-forest text-cream group-hover:rotate-[-8deg]",
        )}
      >
        <PawIcon className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-xl font-bold tracking-tight",
            inverted ? "text-cream" : "text-forest",
          )}
        >
          {siteConfig.name}
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-medium tracking-wide",
            inverted ? "text-sage" : "text-charcoal/55",
          )}
        >
          {siteConfig.nameAr}
        </span>
      </span>
    </>
  );

  const classes = cn("group inline-flex items-center gap-2.5", className);

  if (asLink) {
    return (
      <Link href={routes.store.home} className={classes} aria-label="نيو — الصفحة الرئيسية">
        {content}
      </Link>
    );
  }

  return <span className={classes}>{content}</span>;
}
