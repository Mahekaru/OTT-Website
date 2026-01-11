import activeIndicator from "../assets/Active-Indicator-1.svg";
import logo from "../assets/02-scaled.png";

const Features = () => {
  return (
    <div className="container col ">
      <h2 className="align-self-center">New Features</h2>
      <img className="h16" src={activeIndicator} alt="Active Indicator"></img>
      <div className="row no-wrap align-items-center mt-5">
        <img className="scaled-logo" src={logo} alt="Logo"></img>

        <div className="container col">
          <h1>Avatar Icon</h1>
          <h2 className="pink-color">Personalize your Experience</h2>
          <p className="font-kamerik">
            Choose from a variety of avatar icons with different skin tones to
            represent you and your partner on the app's welcome screen.
          </p>
          <h2 className="pink-color">Interactive Welcome</h2>
          <p className="font-kamerik">
            See your selected avatar on the main screen with each launch,
            creating a warm, personalized touch.
          </p>
          <h2 className="pink-color">Dynamic Updates</h2>
          <p className="font-kamerik">
            During seasonal changes, the avatar's hand icon transforms to match
            the current theme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
