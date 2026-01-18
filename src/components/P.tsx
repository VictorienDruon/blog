import { cn } from "@/utils/cn";

export function P({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("mb-4 leading-7 text-foreground last:mb-0", className)} {...props} />;
}
