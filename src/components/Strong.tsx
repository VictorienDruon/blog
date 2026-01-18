import { cn } from "@/utils/cn";

export function Strong({ className, ...props }: React.ComponentProps<"strong">) {
  return <strong className={cn("font-semibold text-foreground", className)} {...props} />;
}
