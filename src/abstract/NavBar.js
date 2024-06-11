import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header_nav">
        <ul className="header_nav-links">
          <li className="nav_links-item">
            <NavLink
              to="/visitList"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Terminarz
            </NavLink>
          </li>
          <li className="nav_links-item">
            <NavLink
              to="/registration"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Rejestracja
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="header_user">
        <h1 className="header_user-name">Name</h1>
        <button className="header_user-btn btn">
          <i className="icon_logout" />
          <p onClick={handleLogOut}>Wyloguj</p>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
