import { Link, NavLink } from "react-router-dom";

export default function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  const getLinkClass = ({ isActive }) =>
    [
      "text-base font-medium text-neutral-900 transition-colors duration-200",
      "hover:text-neutral-600",
      isActive ? "font-bold" : "",
    ].join(" ");

  return (
    <div className="container-app pb-4 lg:hidden">
      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
        <nav className="flex flex-col gap-5">
          <NavLink to="/" end className={getLinkClass} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={getLinkClass} onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/recipes" className={getLinkClass} onClick={() => setIsOpen(false)}>
            Recipes
          </NavLink>

          <Link
            to="/recipes"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
            onClick={() => setIsOpen(false)}
          >
            Browse recipes
          </Link>
        </nav>
      </div>
    </div>
  );
}