export interface AnnouncementBarProps {
  message?: string;
}

export function AnnouncementBar({ message }: AnnouncementBarProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-foreground py-2 text-center text-xs text-background">
      {message}
    </div>
  );
}
