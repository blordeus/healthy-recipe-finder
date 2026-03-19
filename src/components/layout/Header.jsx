import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `nav-link ${isActive ? "nav-link-active" : ""}`;

  return (
    <header className="border-b border-neutral-200 bg-neutral-100">
      <div className="container-app flex items-center justify-between py-4">
        <Link to="/" className="text-lg font-extrabold">
          Healthy Recipe Finder
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" className={navClass}>
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
          <Link to="/recipes" className="btn-primary">
            Browse recipes
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white lg:hidden"
          aria-label="Open menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Menu size={20} />
        </button>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}