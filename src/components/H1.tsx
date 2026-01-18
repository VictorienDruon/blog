import { cn } from "@/utils/cn";

export function H1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "mb-4 text-2xl font-semibold tracking-tight text-foreground md:mt-8",
        className,
      )}
      {...props}
    />
  );
}
