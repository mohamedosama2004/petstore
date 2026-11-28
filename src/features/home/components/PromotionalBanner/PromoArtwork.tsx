export interface PromoArtworkProps {
  className?: string;
}

export function PromoArtwork({ className }: PromoArtworkProps) {
  return (
    <svg
      viewBox="0 0 360 360"
      className={className ?? "h-full w-full"}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="180" cy="180" r="140" fill="#FAF7F0" opacity="0.08" />
      <circle cx="180" cy="180" r="108" fill="#A8BDA6" opacity="0.16" />

      <path d="M100 154h160l-14 132H114L100 154Z" fill="#FAF7F0" />
      <path d="M136 156v-26c0-24 20-44 44-44s44 20 44 44v26" stroke="#FAF7F0" strokeWidth="8" strokeLinecap="round" />
      <path d="M92 154h176" stroke="#E99A58" strokeWidth="8" strokeLinecap="round" />
      <path d="M150 194h60" stroke="#A8BDA6" strokeWidth="6" strokeLinecap="round" />

      <ellipse cx="180" cy="214" rx="34" ry="30" fill="#FAF7F0" stroke="#244B3C" strokeWidth="5" />
      <path d="M154 194l-6-30 30 16M206 194l6-30-30 16" fill="#FAF7F0" stroke="#244B3C" strokeWidth="5" strokeLinejoin="round" />
      <circle cx="168" cy="210" r="4" fill="#244B3C" />
      <circle cx="192" cy="210" r="4" fill="#244B3C" />
      <path d="m180 220-5 4h10l-5-4Z" fill="#E99A58" />
      <path d="M180 224v8m0 0c-6 0-9-3-12-6m12 6c6 0 9-3 12-6" stroke="#244B3C" strokeWidth="3" strokeLinecap="round" />
      <path d="M158 222l-24-6m26 14-24 5m102-13 24-6m-26 14 24 5" stroke="#244B3C" strokeWidth="2.5" strokeLinecap="round" />

      <circle cx="104" cy="110" r="18" fill="#E99A58" />
      <path d="M96 110h16M104 102v16" stroke="#FAF7F0" strokeWidth="3" strokeLinecap="round" />
      <circle cx="262" cy="98" r="14" fill="#A8BDA6" />
      <path d="M256 98h12" stroke="#FAF7F0" strokeWidth="3" strokeLinecap="round" />
      <path d="m274 214 6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2 6-12Z" fill="#E99A58" opacity="0.9" />
    </svg>
  );
}
