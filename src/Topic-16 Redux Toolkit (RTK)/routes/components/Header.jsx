import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";


const Header = () => {

  const items = useSelector((state) => state.cart.items)

  return (
    <header className="sticky top-0 left-0 h-20 w-full bg-neutral-200">
      <div className="h-full w-full max-w-300 mx-auto flex justify-between items-center">
        <div className="text-xl uppercase font-semibold tracking-wide">
          <Link to="/">Logo</Link>
        </div>
        <nav className="flex gap-5 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-2 px-5 text-lg font-semibold hover:bg-blue-100 rounded-xl ${isActive} ? "bg-blue-100" : "" `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `py-2 px-5 text-lg font-semibold rounded-xl hover:bg-blue-100  ${isActive} ? "bg-blue-100": ""`
            }
          >
            About
          </NavLink>
          <Link to="/cart" className="py-2 px-5 relative">
            <FiShoppingCart size={22} />

            {items.length > 0 && (
              <div className="absolute -top-2 -right-0.5 w-6 h-6 bg-blue-300 rounded-full flex justify-center items-center text-sm">
                {items.length}
              </div>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
