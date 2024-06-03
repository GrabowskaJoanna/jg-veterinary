import React from "react";
import Input from "../../abstract/inputs/TextField";
import TextField from "../../abstract/inputs/TextField";
import Button from "../../abstract/buttons/Button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/visitList");
  };

  return (
    <div className="container">
      <div className="form-image"></div>
      <form className="form-login">
        <div className="form-login-container">
          <h1 className="form-login-header">Logowanie</h1>
          <TextField type="text" name="name" text="Nazwa użytkownika*" />
          <TextField type="password" name="password" text="Hasło*" />
          <button className="form-login-button">Nie pamiętasz hasła?</button>
          <Button
            text="Zaloguj"
            className="btn primary-button"
            onClick={handleClick}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
