import logo from "../assets/Group-13796-3.png";

const Animations = () => {
  return (
    <div className="container col ">
      <div className="row no-wrap align-items-center mt-5">
        <div className="container col">
          <h1>Animations</h1>

          <h2 className="pink-color">Engaging and Playful Animations</h2>
          <p className="font-kamerik">
            Watch as your screen comes to life with new animations. From a heart
            that beats between your names to animated screens,
          </p>

          <h2 className="pink-color">Subtle and Romantic</h2>
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
