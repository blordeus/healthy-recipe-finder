import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navClass = ({ isActive }) =>
    [
      "relative text-sm font-bold text-neutral-900 transition-colors duration-200",
      "hover:text-neutral-600",
      isActive ? "after:absolute after:left-0 after:top-full after:mt-1 after:h-0.5 after:w-full after:rounded-full after:bg-orange-500" : "",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-100/95 backdrop-blur-sm">
      <div className="px-8 md:px-12 lg:px-20 flex h-[72px] items-center justify-between">
        <Link to="/" className="shrink-0" onClick={closeMenu}>
          <div className="flex items-center gap-2">
            <div className="flex">
              {/* //import logo svg from assets folder */}
              <img src={logo} alt="Healthy Recipe Finder Logo" />
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          <NavLink to="/" className={navClass} end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={navClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/recipes" className={navClass} onClick={closeMenu}>
            Recipes
          </NavLink>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/recipes"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-bold text-white transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
            onClick={closeMenu}
          >
            Browse recipes
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-200 text-neutral-900 transition hover:bg-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Menu size={20} strokeWidth={2.2} />
        </button>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}