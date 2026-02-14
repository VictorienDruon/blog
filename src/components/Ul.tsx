import { cn } from "@/utils/cn";

export function Ul({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn(
        "my-4 list-[square] pl-6 leading-7 text-foreground marker:text-muted-foreground [&>li]:mb-1",
        className,
      )}
      {...props}
    />
  );
}
