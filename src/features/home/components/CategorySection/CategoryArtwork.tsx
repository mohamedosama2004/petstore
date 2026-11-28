import type { CategoryArtworkKind } from "../../data";

export interface CategoryArtworkProps {
  kind: CategoryArtworkKind;
}

export function CategoryArtwork({ kind }: CategoryArtworkProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-full w-full transition-transform duration-500 group-hover:scale-110"
      fill="none"
      stroke="#244B3C"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === "cat-food" ? (
        <>
          <path d="M24 62h72c-3 22-18 36-36 36S27 84 24 62Z" fill="#FAF7F0" />
          <path d="M18 62h84" stroke="#A8BDA6" strokeWidth="5" />
          <circle cx="47" cy="51" r="6" fill="#E99A58" stroke="none" />
          <circle cx="62" cy="45" r="6" fill="#E99A58" stroke="none" />
          <circle cx="77" cy="52" r="6" fill="#E99A58" stroke="none" />
          <path d="M36 29c10-9 24-9 34 0l-17 14-17-14Z" fill="#A8BDA6" opacity="0.5" />
        </>
      ) : null}

      {kind === "dog-food" ? (
        <>
          <path d="M22 64h76c-4 21-18 34-38 34S26 85 22 64Z" fill="#FAF7F0" />
          <path d="M16 64h88" stroke="#A8BDA6" strokeWidth="5" />
          <path d="M46 42c-6-6-6-14 0-18 5-3 10-1 14 3 4-4 9-6 14-3 6 4 6 12 0 18-4 4-9 5-14 2-5 3-10 2-14-2Z" fill="#E99A58" stroke="#244B3C" strokeWidth="2.5" />
          <circle cx="60" cy="32" r="3" fill="#FAF7F0" stroke="none" />
        </>
      ) : null}

      {kind === "toys" ? (
        <>
          <circle cx="60" cy="60" r="36" fill="#FAF7F0" />
          <path d="M30 40c16 10 44 10 60 0M26 60c18 10 50 10 68 0M34 81c14 8 38 8 52 0" stroke="#A8BDA6" />
          <circle cx="60" cy="60" r="10" fill="#E99A58" stroke="#244B3C" />
          <path d="M60 24v-8M60 104v-8M24 60h-8M104 60h-8" stroke="#244B3C" />
        </>
      ) : null}

      {kind === "accessories" ? (
        <>
          <path d="M32 72c0-25 12-40 28-40s28 15 28 40" strokeWidth="9" stroke="#A8BDA6" />
          <path d="M32 72h56" stroke="#244B3C" />
          <circle cx="60" cy="80" r="12" fill="#E99A58" />
          <path d="M60 75v10" stroke="#FAF7F0" strokeWidth="2.5" />
          <circle cx="60" cy="73" r="2" fill="#FAF7F0" stroke="none" />
        </>
      ) : null}

      {kind === "grooming" ? (
        <>
          <rect x="44" y="30" width="32" height="54" rx="10" fill="#FAF7F0" />
          <path d="M52 30v-8h16v8" fill="#A8BDA6" />
          <rect x="50" y="54" width="20" height="18" rx="3" fill="#E99A58" stroke="none" />
          <path d="M30 96h60" stroke="#A8BDA6" strokeWidth="5" />
          <path d="M38 78v12m12-12v12m20-12v12m12-12v12" stroke="#244B3C" strokeWidth="2" />
        </>
      ) : null}
    </svg>
  );
}
