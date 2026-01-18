import logo from "../assets/Group-13796-3.png";
import { useInView } from "../hooks/useInView";

const Animations = () => {
      const { ref, isVisible } = useInView();
      const visibleClass = isVisible ? "is-visible" : "";
    
  return (

    <div ref={ref} className="container col ">
      <div className="row no-wrap align-items-center mt-5">
        <div className="container col">
          <h1 className={`slide-in-right ${visibleClass}`}>Animations</h1>

          <h2 className={`pink-color fade-in-up ${visibleClass}`}>Engaging and Playful Animations</h2>
          <p className="font-kamerik">
            Watch as your screen comes to life with new animations. From a heart
            that beats between your names to animated screens,
          </p>

          <h2 className={`pink-color fade-in-up ${visibleClass}`}>Subtle and Romantic</h2>
          <p className="font-kamerik">
            These animations are designed to enhance your experience without
            overwhelming it, adding just the right touch of warmth and romance.
          </p>
        </div>
        <img className="scaled-logo" src={logo} alt="Logo"></img>
      </div>
    </div>
  );
};

export default Animations;
