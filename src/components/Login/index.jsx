import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../Header";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", email, password, rememberMe);
  };

  return (
  <div className="mm"><Header/>
    <div className="login-container">
        
      <h1>Hello Again</h1>
      <form onSubmit={handleSubmit}>
      <div class="email-input-container">
  <label for="email">Email:</label>
  <div class="email-input-wrapper">
    <input type="email" id="email" name="email" placeholder="Enter your email address" />
    <i class="far fa-eye-slash" id="togglePassword"></i>
  </div>
</div>
<div class="password-input-container">
  <label for="password">Password:</label>
  <div class="password-input-wrapper">
    <input type="password" id="password" name="password" placeholder="Enter your password" />
    <i class="fa fa-eye-slash" id="togglePassword"></i>
  </div>
</div>
        <label className="bbn">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember me
        </label>
        <button type="submit">Login</button>
      </form>
    
    </div></div>
  );
};

export default Login;