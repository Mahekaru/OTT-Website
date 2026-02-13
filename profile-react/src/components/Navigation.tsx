import "../Navigation.css";
import { Link } from "react-router-dom";
import logo from "../assets/Frame-3-1.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
                    <li>
            <Link to="/updates">Updates</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
                    <li>
            <Link to="/privacy">Privacy Notice</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
