import { NavLink } from "react-router-dom";
import React from "react";

const NavTabs = () => {
  return (
    <div className="nav_tabs">
      <ul className="nav_links">
        <li className="nav_links_item">
          <NavLink
            to="/visitList"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Terminarz
          </NavLink>
        </li>
        <li className="nav_links_item">
          <NavLink
            to="/registration/0"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Rejestracja
          </NavLink>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default NavTabs;
