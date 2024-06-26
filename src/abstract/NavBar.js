import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const name = sessionStorage.getItem("name");

  const handleLogOut = () => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header_nav">
        <ul className="header_nav_links">
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
      </div>
      <div className="header_user">
        <h1 className="header_user_name">{name}</h1>
        <button className="header_user_btn btn">
          <i className="icon-logout" />
          <p onClick={handleLogOut}>Wyloguj</p>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
