import "../Navigation.css";
import logo from "../assets/Frame-3-1.svg";

const Navigation = () => {

  return (
    <>
      <div className="navigation">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="nav-links">
          <li>
            <a href="/" rel="noopener noreferrer">Home</a>
          </li>
          <li>
            <a href="/privacy" rel="noopener noreferrer">Privacy Notice</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
