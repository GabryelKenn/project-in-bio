import { cn } from "@/lib/utils";

export default function Button({
  children,
  variante = "primary",
  ...props
}: {
  children: React.ReactNode;
  variante?: "primary" | "secondary" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70",
        variante === "primary" && "bg-at-purple",
        variante === "secondary" && "bg-bg-tertiary",
        variante === "ghost" && "border-bd-primary",
        props.className
      )}      
      >
  { children }
    </button >
  );
}