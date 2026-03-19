import { Link, NavLink } from "react-router-dom";

export default function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  return (
    <div className="container-app pb-4 lg:hidden">
      <div className="card-surface rounded-xl p-4">
        <nav className="flex flex-col gap-5">
          <NavLink to="/" onClick={handleClose}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={handleClose}>
            About
          </NavLink>
          <NavLink to="/recipes" onClick={handleClose}>
            Recipes
          </NavLink>
          <Link to="/recipes" className="btn-primary mt-2" onClick={handleClose}>
            Browse recipes
          </Link>
        </nav>
      </div>
    </div>
  );
}