// import React, { useState } from "react";
// import TextField from "../../abstract/inputs/TextField";
// import Button from "../../abstract/buttons/Button";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login, setName } from "../store/sessionSlice";
//
// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();
//
//   const navigate = useNavigate();
//   const handleLogin = (e) => {
//     e.preventDefault();
//
//     const data = {
//       username,
//       password,
//     };
//
//     fetch("http://localhost:7080/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data.token && data.token.trim() !== "") {
//           dispatch(login(data.token));
//           sessionStorage.setItem("token", data.token);
//           sessionStorage.setItem("name", data.name);
//           navigate("/visitList");
//         } else {
//           console.error("Invalid token received");
//           setError("Niepoprawne login lub hasło");
//         }
//         dispatch(setName(data.name));
//       })
//       .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//       });
//   };
//
//   const showLoginData = () => {
//     console.log({
//       username: "joannag",
//       password: "v3t3r1n4ry",
//     });
//   };
//
//   return (
//     <div className="container">
//       <div className="form_image"></div>
//       <form className="form_login" onSubmit={handleLogin}>
//         <div className="form_login_container">
//           <h1 className="form_login_header">Logowanie</h1>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//           <TextField
//             type="text"
//             name="name"
//             text="Nazwa użytkownika*"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <TextField
//             type="password"
//             name="password"
//             text="Hasło*"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             type="button"
//             className="form_login_button"
//             onClick={showLoginData}
//           >
//             Nie pamiętasz hasła?
//           </button>
//           <Button type="submit" text="Zaloguj" className="btn primary_button" />
//         </div>
//       </form>
//     </div>
//   );
// };
//
// export default LoginForm;

import React, { useState } from "react";
import TextField from "../../abstract/inputs/TextField";
import Button from "../../abstract/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, setName } from "../store/sessionSlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Proszę wprowadzić login i hasło.");
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
          dispatch(login(data.token));
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("name", data.name);
          navigate("/visitList");
        } else {
          console.error("Invalid token received");
        }
        dispatch(setName(data.name));
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setError("Niepoprawny login lub hasło");
      });
  };

  const showLoginData = () => {
    console.log({
      username: "joannag",
      password: "v3t3r1n4ry",
    });
  };

  return (
    <div className="container">
      <div className="form_image"></div>
      <form className="form_login" onSubmit={handleLogin}>
        <div className="form_login_container">
          <h1 className="form_login_header">Logowanie</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <TextField
            type="text"
            name="name"
            text="Nazwa użytkownika*"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={error ? "error" : null}
          />
          <TextField
            type="password"
            name="password"
            text="Hasło*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error ? "error" : null}
          />
          <button
            type="button"
            className="form_login_button"
            onClick={showLoginData}
          >
            Nie pamiętasz hasła?
          </button>
          <Button type="submit" text="Zaloguj" className="btn primary_button" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
