import { cn } from "@/utils/cn";

export function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div className={cn("relative my-6 w-full overflow-x-auto rounded-lg border", className)}>
      <table className="w-full border-collapse text-left text-sm text-foreground" {...props} />
    </div>
  );
}

export function Thead({ className, ...props }: React.ComponentProps<"thead">) {
  return <thead className={cn("bg-muted/50 [&_tr]:border-b", className)} {...props} />;
}

export function Tbody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <tbody className={cn("[&>tr:last-child]:border-b-0", className)} {...props} />;
}

export function Tr({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr className={cn("border-b transition-colors hover:bg-muted/30", className)} {...props} />
  );
}

export function Th({ className, ...props }: React.ComponentProps<"th">) {
  return <th className={cn("px-4 py-3 font-semibold text-foreground", className)} {...props} />;
}

export function Td({ className, ...props }: React.ComponentProps<"td">) {
  return <td className={cn("px-4 py-3 text-muted-foreground", className)} {...props} />;
}
