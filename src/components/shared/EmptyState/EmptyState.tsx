export interface EmptyStateProps {
  title: string;
  description?: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-12 text-center">
      <h2 className="text-base font-semibold">{title}</h2>
      {description ? <p className="text-sm text-zinc-500">{description}</p> : null}
    </div>
  );
}
