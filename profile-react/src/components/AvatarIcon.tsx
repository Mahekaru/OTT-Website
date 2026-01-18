import logo from "../assets/02-scaled.png";
import { useInView } from "../hooks/useInView";

const AvatarIcon = () => {
  const { ref, isVisible } = useInView();
  const visibleClass = isVisible ? "is-visible" : "";

  return (
    <div className="container col ">
      <div className="row no-wrap align-items-center mt-5">
        <img className="scaled-logo" src={logo} alt="Logo"></img>

        <div ref={ref} className="container col">
          <h1 className={`slide-in-right ${visibleClass}`}>
            Avatar Icon
          </h1>
          <h2
            className={`pink-color fade-in-up ${visibleClass}`}
          >
            Personalize your Experience
          </h2>
          <p className="font-kamerik">
            Choose from a variety of avatar icons with different skin tones to
            represent you and your partner on the app's welcome screen.
          </p>
          <h2
            className={`pink-color fade-in-up ${visibleClass}`}
          >
            Interactive Welcome
          </h2>
          <p className="font-kamerik">
            See your selected avatar on the main screen with each launch,
            creating a warm, personalized touch.
          </p>
          <h2
            className={`pink-color fade-in-up ${visibleClass}`}
          >
            Dynamic Updates
          </h2>
          <p className="font-kamerik">
            During seasonal changes, the avatar's hand icon transforms to match
            the current theme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvatarIcon;
