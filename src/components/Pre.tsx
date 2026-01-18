import { cn } from "@/utils/cn";

export function Pre({ className, ...props }: React.ComponentProps<"pre">) {
  return (
    <pre
      className={cn(
        "my-6 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm",
        "[&_code]:text-(--shiki-light) [&_code_span]:text-(--shiki-light)",
        "dark:[&_code]:text-(--shiki-dark) dark:[&_code_span]:text-(--shiki-dark)",
        className,
      )}
      {...props}
    />
  );
}
