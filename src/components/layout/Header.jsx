import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navClass = ({ isActive }) =>
    [
      "relative text-sm font-bold text-neutral-900 transition-colors duration-200",
      "hover:text-neutral-600",
      isActive ? "after:absolute after:left-0 after:top-full after:mt-1 after:h-0.5 after:w-full after:rounded-full after:bg-orange-500" : "",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-100/95 backdrop-blur-sm">
      <div className="container-app flex h-[72px] items-center justify-between">
        <Link to="/" className="shrink-0">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-lg">
              🥬
            </div>
            <span
              className="text-base font-extrabold tracking-[-0.02em] text-neutral-900 md:text-[1.375rem]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Healthy Recipe Finder
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          <NavLink to="/" className={navClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/recipes" className={navClass}>
            Recipes
          </NavLink>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/recipes"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-bold text-white transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          >
            Browse recipes
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-200 text-neutral-900 transition hover:bg-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Menu size={20} strokeWidth={2.2} />
        </button>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}