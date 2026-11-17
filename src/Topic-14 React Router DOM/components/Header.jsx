import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-20 bg-blue-200 ">
      <div className="w-full max-w-300 h-full mx-auto flex items-center justify-between">
        <div className="text-xl uppercase font-semibold tracking-wide">
          <Link to="/">Logo</Link>
        </div>

        <nav className="flex gap-5 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `bg-orange-100  font-semibold px-5 py-1.5 hover:bg-orange-100 rounded-md transition`
                : `font-semibold px-5 py-1.5 hover:bg-orange-100 rounded-md transition`
            }
          >
            All
          </NavLink>

          <NavLink
            to="/homes"
            className={({ isActive }) =>
              isActive
                ? `bg-orange-100  font-semibold px-5 py-1.5 hover:bg-orange-100 rounded-md transition`
                : `font-semibold px-5 py-1.5 hover:bg-orange-100 rounded-md transition`
            }
          >
            Homes
          </NavLink>

          <NavLink
            to="/experiences"
            className={({ isActive }) =>
              isActive
                ? `bg-orange-100  font-semibold px-5 py-1.5 hover:bg-orange-100 rounded-md transition`
                : `font-semibold px-5 py-1.5 hover:bg-orange-100 rounded-md transition`
            }
          >
            Experiences
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? `bg-orange-100  font-semibold px-5 py-1.5 hover:bg-orange-100 rounded-md transition`
                : `font-semibold px-5 py-1.5 hover:bg-orange-100 rounded-md transition`
            }
          >
            Services
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
