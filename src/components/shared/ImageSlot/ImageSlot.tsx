import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ImageSlotProps {
  alt: string;
  fallback: ReactNode;
  src?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}

export function ImageSlot({
  alt,
  fallback,
  src,
  className,
  imageClassName,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
}: ImageSlotProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      data-image-slot={src ? "image" : "fallback"}
      role={src ? undefined : "img"}
      aria-label={src ? undefined : alt}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        fallback
      )}
    </div>
  );
}
