import { Link, NavLink } from "react-router-dom";

export default function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  const linkClass =
    "text-base font-medium text-neutral-900 transition-colors hover:text-neutral-600";

  return (
    <div className="container-app pb-4 lg:hidden">
      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
        <nav className="flex flex-col gap-5">
          <NavLink to="/" end className={linkClass} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/recipes" className={linkClass} onClick={() => setIsOpen(false)}>
            Recipes
          </NavLink>

          <Link
            to="/recipes"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-bold text-white transition hover:brightness-95"
            onClick={() => setIsOpen(false)}
          >
            Browse recipes
          </Link>
        </nav>
      </div>
    </div>
  );
}