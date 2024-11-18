import React from "react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const name = sessionStorage.getItem("name");

  const handleLogOut = () => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header_user">
        <h1 className="header_user_name">{name}</h1>
        <button className="header_user_btn btn" onClick={handleLogOut}>
          <i className="icon-logout" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
