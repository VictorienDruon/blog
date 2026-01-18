import { cn } from "@/utils/cn";

export function Li({ className, ...props }: React.ComponentProps<"li">) {
  return <li className={cn("pl-1 text-foreground", className)} {...props} />;
}
