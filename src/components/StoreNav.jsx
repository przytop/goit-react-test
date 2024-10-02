import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./StoreNav.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function StoreNav() {
  return (
    <div>
      <h1>Store</h1>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav>
    </div>
  );
}
