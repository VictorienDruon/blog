import { cn } from "@/utils/cn";

export function Ol({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      className={cn("my-4 list-decimal pl-6 leading-7 text-foreground [&>li]:mb-1", className)}
      {...props}
    />
  );
}
