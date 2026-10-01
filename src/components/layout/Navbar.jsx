import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const links = [
  {
    label: "About",
    href: "#about",
  },

  {
    label: "Academics",
    href: "#academics",
  },

  {
    label: "Campus",
    href: "#campus",
  },

  {
    label: "Sports",
    href: "#sports",
  },

  {
    label: "Admissions",
    href: "#admissions",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const [dark, setDark] = useState(
    () =>
      localStorage.getItem("tis-theme") ===
      "dark"
  );

  useEffect(() => {
    document.body.classList.toggle(
      "dark",
      dark
    );

    localStorage.setItem(
      "tis-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[90]">
      <div className="mx-auto mt-4 w-[calc(100%-24px)] max-w-7xl rounded-full border border-white/30 bg-white/80 px-3 py-2 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1712]/80 sm:w-[calc(100%-40px)]">
        <nav
          className="flex items-center justify-between gap-4"
          aria-label="Primary navigation"
        >
          <a
            href="#"
            className="flex items-center gap-3 px-2"
            onClick={closeMenu}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#12372A] font-serif text-sm font-bold text-white">
              TIS
            </span>

            <span className="hidden text-sm font-bold tracking-wide text-[#12372A] dark:text-white sm:block">
              TULAS INTERNATIONAL SCHOOL
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#17231d]/80 transition hover:text-[#C9A227] dark:text-white/80"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle
              dark={dark}
              onToggle={() =>
                setDark((value) => !value)
              }
            />

            <a
              href="#admissions"
              className="hidden rounded-full bg-[#12372A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0B1712] sm:block"
            >
              Enquire Now
            </a>

            <button
              type="button"
              aria-label={
                open
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={open}
              onClick={() =>
                setOpen((value) => !value)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] lg:hidden"
            >
              {open ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-[var(--line)] px-3 pb-4 pt-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--cream)] hover:text-[#C9A227]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#admissions"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-[#12372A] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Enquire Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;