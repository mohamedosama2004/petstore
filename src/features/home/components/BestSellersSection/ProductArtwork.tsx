import type { ProductArtworkKind } from "../../data";

export interface ProductArtworkProps {
  kind: ProductArtworkKind;
}

export function ProductArtwork({ kind }: ProductArtworkProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      className="h-full w-full p-5 transition-transform duration-500 group-hover:scale-105"
      fill="none"
      stroke="#244B3C"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="120" cy="120" r="88" fill="#A8BDA6" opacity="0.16" stroke="none" />

      {kind === "cat-food" ? (
        <>
          <path d="M74 68h92l-9 108H83L74 68Z" fill="#FAF7F0" />
          <path d="M74 68h92l-8 22H82l-8-22Z" fill="#E99A58" stroke="none" opacity="0.85" />
          <path d="M100 116c12-11 28-11 40 0l-20 18-20-18Z" fill="#A8BDA6" opacity="0.6" />
          <circle cx="98" cy="158" r="5" fill="#E99A58" stroke="none" />
          <circle cx="120" cy="162" r="5" fill="#E99A58" stroke="none" />
          <circle cx="142" cy="158" r="5" fill="#E99A58" stroke="none" />
        </>
      ) : null}

      {kind === "dog-food" ? (
        <>
          <ellipse cx="120" cy="96" rx="62" ry="20" fill="#E99A58" stroke="none" opacity="0.85" />
          <path d="M58 96h124l-12 66H70L58 96Z" fill="#FAF7F0" />
          <ellipse cx="120" cy="96" rx="62" ry="20" />
          <path d="M96 150c-8-8-8-18 0-24 6-4 14-2 24 4 10-6 18-8 24-4 8 6 8 16 0 24-6 5-14 6-24 1-10 5-18 4-24-1Z" fill="#A8BDA6" opacity="0.6" />
        </>
      ) : null}

      {kind === "toy" ? (
        <>
          <circle cx="120" cy="120" r="70" fill="#FAF7F0" />
          <path d="M64 88c30 18 82 18 112 0M54 120c34 20 98 20 132 0M66 153c28 16 80 16 108 0" stroke="#A8BDA6" />
          <circle cx="120" cy="120" r="18" fill="#E99A58" />
          <path d="M120 50v-12M120 202v-12M50 120H38M202 120h-12" />
        </>
      ) : null}

      {kind === "collar" ? (
        <>
          <path d="M60 154c0-60 24-94 60-94s60 34 60 94" strokeWidth="12" stroke="#A8BDA6" />
          <path d="M60 154h120" />
          <circle cx="120" cy="166" r="18" fill="#E99A58" />
          <path d="M120 158v16" stroke="#FAF7F0" strokeWidth="3" />
          <circle cx="120" cy="156" r="2.5" fill="#FAF7F0" stroke="none" />
        </>
      ) : null}

      {kind === "shampoo" ? (
        <>
          <rect x="86" y="72" width="68" height="112" rx="18" fill="#FAF7F0" />
          <path d="M104 72V56h32v16" fill="#A8BDA6" />
          <rect x="96" y="116" width="48" height="40" rx="6" fill="#E99A58" stroke="none" />
          <path d="M108 132h24M108 142h16" stroke="#FAF7F0" strokeWidth="3" />
          <path d="M100 184h40" stroke="#A8BDA6" strokeWidth="4" />
        </>
      ) : null}

      {kind === "bed" ? (
        <>
          <ellipse cx="120" cy="146" rx="78" ry="38" fill="#FAF7F0" />
          <path d="M42 146c0-22 35-39 78-39s78 17 78 39" stroke="#A8BDA6" strokeWidth="6" />
          <path d="M66 138c14-10 30-14 54-14s40 4 54 14" stroke="#E99A58" strokeWidth="5" />
          <path d="M62 174h116" stroke="#A8BDA6" strokeWidth="5" />
          <path d="M82 104c0-12 10-22 22-22h32c12 0 22 10 22 22" stroke="#244B3C" />
        </>
      ) : null}
    </svg>
  );
}
