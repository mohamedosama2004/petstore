export interface ErrorStateProps {
  title?: string;
  message?: string;
}

export function ErrorState({
  title = "Something went wrong",
  message,
}: ErrorStateProps) {
  return (
    <div role="alert" className="flex flex-col items-center justify-center gap-2 py-12 text-center">
      <h2 className="text-base font-semibold text-red-600">{title}</h2>
      {message ? <p className="text-sm text-zinc-500">{message}</p> : null}
    </div>
  );
}
