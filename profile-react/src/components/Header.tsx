import phoneimg from "../assets/01-1-scaled.png";
import appstoreimg from "../assets/Apple-1.svg";
import playstoreimg from "../assets/Google_Play_2022_logo.svg";
import "../Header.css";

interface Props{
    appleurl?: string;
    googleurl?: string;
}

const Header = (props: Props) => {
  return (
    <div className="bg-header">
      <div className="header-text">
        <h2>LOVE OUR TIME</h2>
        <h1>Together</h1>
        <p>
          Celebrate Every Moment of Your Journey <br /> Together, Track,
          Cherish, and Enjoy!
        </p>
        <a
        className="mt-5"
          href={props.appleurl}
          target="_blank"
        >
          <img className="app-store" src={appstoreimg} alt="App Store"></img>
        </a>
        <a
          className="mt-2"
          href={props.googleurl}
          target="_blank"
        >
          <img className="play-store" src={playstoreimg} alt="Play Store"></img>
        </a>
      </div>
      <img src={phoneimg} alt="Header Image"></img>
    </div>
  );
};

export default Header;
