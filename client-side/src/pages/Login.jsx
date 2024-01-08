import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="username" required/>
        <input type="password" placeholder="password" required/>
        <button>Login</button>
        <p>There's an Error!</p>
        <span>Don't have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  );
};

export default Login;