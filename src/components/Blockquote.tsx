import { cn } from "@/utils/cn";

export function Blockquote({ children, className, ...props }: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn("my-6 border-l-4 pl-4 text-muted-foreground italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}
