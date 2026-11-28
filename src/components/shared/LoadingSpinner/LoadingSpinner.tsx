export interface LoadingSpinnerProps {
  label?: string;
}

export function LoadingSpinner({ label = "Loading..." }: LoadingSpinnerProps) {
  return (
    <div role="status" aria-live="polite" className="flex items-center justify-center py-8 text-sm text-zinc-500">
      {label}
    </div>
  );
}
