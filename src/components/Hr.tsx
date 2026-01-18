import { cn } from "@/utils/cn";

export function Hr({ className, ...props }: React.ComponentProps<"hr">) {
  return <hr className={cn("my-8 border-t", className)} {...props} />;
}
