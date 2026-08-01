import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "resize-none placeholder:text-muted-foreground bg-muted border border-border flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base text-foreground transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-[var(--accent)] focus-visible:ring-[var(--accent)]/30",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
