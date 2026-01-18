import { cn } from "@/utils/cn";

export function Em({ className, ...props }: React.ComponentProps<"em">) {
  return <em className={cn("text-foreground italic", className)} {...props} />;
}
