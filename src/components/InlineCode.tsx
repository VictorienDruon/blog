import { cn } from "@/utils/cn";

export function InlineCode({ children, className, ...props }: React.ComponentProps<"code">) {
  return (
    <code className={cn("rounded bg-muted px-1.5 py-0.5 font-mono text-sm", className)} {...props}>
      {children}
    </code>
  );
}
