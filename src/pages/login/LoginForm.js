import React, { useState } from "react";
import TextField from "../../abstract/inputs/TextField";
import Button from "../../abstract/buttons/Button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Należy wprowadzić login i hasło.");
      return;
    }

    const data = {
      username,
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
        if (data.token && data.token.trim() !== "") {
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("name", data.name);
          navigate("/visitList");
        } else {
          console.error("Invalid token received");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setError("Niepoprawny login lub hasło");
      });
  };

  const showLoginData = () => {
    alert("Nazwa użytkownika i hasło zostały wyświetlone w konsoli");
    console.log({
      username: "joannag",
      password: "v3t3r1n4ry",
    });
    alert("Nazwa użytkownika i hasło zostały wyświetlone w konsoli");
  };

  return (
    <div className="container">
      <aside className="form_image"></aside>
      <main className="form_login_container">
        <form className="form_login" onSubmit={handleLogin}>
          <h1 className="form_login_header">Logowanie</h1>
          {error && (
            <p style={{ color: "red", marginBottom: "5px" }}>{error}</p>
          )}
          <TextField
            type="text"
            name="name"
            text="Nazwa użytkownika*"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={error ? "error_field" : null}
          />
          <TextField
            type="password"
            name="password"
            text="Hasło*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error ? "error_field" : null}
          />
          <button
            type="button"
            className="form_login_button"
            onClick={showLoginData}
          >
            Nie pamiętasz hasła?
          </button>
          <Button type="submit" text="Zaloguj" className="btn primary_button" />
        </form>
      </main>
    </div>
  );
};

export default LoginForm;
