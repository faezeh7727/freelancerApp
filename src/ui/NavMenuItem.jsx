/** @format */

import { NavLink } from "react-router-dom";

const NavMenuItem = ({ to, label, icon: Icon }) => {
  return (
    <li className="list-none">
      <NavLink
        to={to}
        className={({ isActive }) => `
          flex items-center py-2 pr-4 transition-all duration-300 ease-in-out border-r-4 
          ${
            isActive ?
              "border-primary bg-primary/10 text-primary"
            : "border-transparent text-secondary  hover:border-border-secondary hover:text-primary"
          }
        `}
      >
        {Icon && <Icon className="ml-3 w-5 h-5" />}
        <span className="font-medium">{label}</span>
      </NavLink>
    </li>
  );
};

export default NavMenuItem;
