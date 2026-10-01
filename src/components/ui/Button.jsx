import { ArrowUpRight } from "lucide-react";

function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:ring-offset-2";

  const styles = {
    primary:
      "bg-[#C9A227] text-white hover:-translate-y-0.5 hover:bg-[#b8921e]",

    secondary:
      "border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-[#12372A]",

    dark:
      "bg-[#12372A] text-white hover:-translate-y-0.5 hover:bg-[#0B1712]",

    outline:
      "border border-[var(--line)] text-[var(--ink)] hover:border-[#C9A227] hover:text-[#C9A227]",
  };

  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <span>{children}</span>

      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

export default Button;