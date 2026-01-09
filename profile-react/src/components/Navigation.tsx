import "../Navigation.css";
import logo from "../assets/Frame-3-1.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
