import { cn } from "@/utils/cn";

export function Img({ className, alt = "", ...props }: React.ComponentProps<"img">) {
  return <img alt={alt} className={cn("my-4 rounded-lg border", className)} {...props} />;
}
