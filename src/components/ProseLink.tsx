import { cn } from "@/utils/cn";

export function ProseLink({ children, href, className, ...props }: React.ComponentProps<"a">) {
  const isExternal = href?.startsWith("http");
  return (
    <a
      href={href}
      className={cn(
        "text-foreground underline decoration-subtle-foreground underline-offset-2 transition-colors hover:decoration-muted-foreground",
        className,
      )}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}
