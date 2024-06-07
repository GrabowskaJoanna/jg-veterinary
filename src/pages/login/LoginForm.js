import React, { useState } from "react";
import TextField from "../../abstract/inputs/TextField";
import Button from "../../abstract/buttons/Button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      userName,
      password,
    };

    fetch("http://localhost:7080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/visitList");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="container">
      <div className="form-image"></div>
      <form className="form-login" onSubmit={handleLogin}>
        <div className="form-login-container">
          <h1 className="form-login-header">Logowanie</h1>
          <TextField
            type="text"
            name="name"
            text="Nazwa użytkownika*"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            type="password"
            name="password"
            text="Hasło*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" className="form-login-button">
            Nie pamiętasz hasła?
          </button>
          <Button type="submit" text="Zaloguj" className="btn primary-button" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
