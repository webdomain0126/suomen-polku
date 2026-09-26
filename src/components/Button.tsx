import { Link } from "@/i18n/navigation";
import { ComponentProps, ReactNode } from "react";

type LinkHref = ComponentProps<typeof Link>["href"];

type Variant = "primary" | "outline" | "lingon" | "ghost-light";

const variantClasses: Record<Variant, string> = {
  primary: "bg-spruce-dark text-paper hover:bg-spruce border border-transparent",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper bg-transparent",
  lingon: "bg-lingon text-snow hover:bg-[#84302a] border border-transparent",
  "ghost-light": "border border-paper/50 text-paper hover:bg-paper/10 bg-transparent",
};

export default function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <Link
      href={href as LinkHref}
      className={`inline-flex items-center justify-center px-6 py-3 text-[0.96rem] font-semibold rounded-[3px] transition-colors whitespace-nowrap ${variantClasses[variant]}`}
    >
      {children}
    </Link>
  );
}