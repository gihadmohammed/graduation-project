import { Link } from "react-router-dom";
import "./style.css";
import user from "./user.png";

const Header = () => (
  <div className="na">
    <Link to="/">
      <img src="./logo.png" className="n1" alt="Logo" />
    </Link>
    <Link to="/login">
      <img src={user} className="n2" alt="User" />
    </Link>
    <p>
      Minimal <span>Sho</span>pping
    </p>
  </div>
);

export default Header;