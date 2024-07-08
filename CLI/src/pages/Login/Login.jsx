import React, { useState } from "react";

import newRequest from "../../utils/newRequest";
import {useNavigate} from "react-router-dom"
import "./Login.css";


const Login = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await newRequest.post("/auth/login", {
        username,
        password,
      })
        localStorage.setItem("currentUser" , JSON.stringify(res.data))
      navigate("/")
    } catch (err) {
      setError(err.response.data);
      // console.log(err.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">User Name</label>
        <input
          name="username"
          placeholder="johndoe"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
        {error && <span>{error}</span>}
      </form>
    </div>
  );
};

export default Login;
