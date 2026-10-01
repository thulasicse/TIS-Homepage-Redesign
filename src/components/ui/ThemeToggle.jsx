import { Moon, Sun } from "lucide-react";

function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={
        dark
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] transition hover:border-[#C9A227] hover:text-[#C9A227]"
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

export default ThemeToggle;