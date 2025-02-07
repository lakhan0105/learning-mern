import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [regUser, setRegUser] = useState({ userName: "", password: "" });

  function handleRegChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setRegUser((prev) => {
      return { ...prev, [key]: value };
    });
  }

  async function handleReg(e) {
    e.preventDefault();
    console.log(regUser);

    try {
      const resp = await axios.post("http://localhost:8000/register", regUser);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }

    setRegUser({ username: "", password: "" });
  }

  return (
    <section>
      <form action="/register" onSubmit={handleReg}>
        <input
          type="text"
          name="userName"
          onChange={handleRegChange}
          value={regUser.userName}
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleRegChange}
          value={regUser.password}
          required
        />

        <input type="submit" />
      </form>
    </section>
  );
}

export default Register;
