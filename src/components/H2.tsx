import { cn } from "@/utils/cn";

export function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("mt-12 mb-2 text-xl font-semibold tracking-tight text-foreground", className)}
      {...props}
    />
  );
}
