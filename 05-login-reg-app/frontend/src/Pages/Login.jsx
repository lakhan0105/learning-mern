import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [loginUser, setLoginUser] = useState("");

  function handleOnChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setLoginUser((prev) => {
      return { ...prev, [key]: value };
    });
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const resp = await axios.post("http://localhost:8000/login", loginUser);

      const { success, message } = resp;

      if (success) {
        console.log("Login successfull");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    }
    setLoginUser({ username: "", password: "" });
  }

  return (
    <div>
      <form action="/login" onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          onChange={handleOnChange}
          value={loginUser.username}
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleOnChange}
          value={loginUser.password}
          required
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
