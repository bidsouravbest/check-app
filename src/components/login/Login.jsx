import React, { useState } from "react";
import { useAuth } from "../utils/Auth";
import { useNavigate } from "react-router-dom";
import data from "./users/UserDetailsJson.json";

const Login = () => {
  const [user, setUser] = useState("");

  const auth = useAuth();

  const navigate = useNavigate();

  const userNames = [];

  data.map((item) => {
    userNames.push(item.username);
  });

  const handleLogin = () => {
    const check = userNames.includes(user) ? true : false;
    if(check) {
      auth.login(user);
      navigate("/profile")
    }
    else {
      alert("Please enter correct username! (You can check in User tab for details. :-)")
    }
  };

  return (
    <div>
      <h2>Login PAGE!!</h2>
      <label>User-name : </label>
      <input type="text" onChange={(ev) => setUser(ev.target.value)} />
      <p></p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
