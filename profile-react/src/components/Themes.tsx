import logo from "../assets/03-scaled.png";

const Themes = () => {
  return (
    <div className="container col ">
      <div className="row no-wrap align-items-center mt-5">
        <div className="container col">
          <h1>Themes</h1>

          <h2 className="pink-color">Seasonal Themes</h2>
          <p className="font-kamerik">
            Experience the app's evolving look as themes change with the
            seasons. Celebrate Halloween, Christmas, fall, and more to come each
            theme brings unique icons and color schemes.
          </p>

          <h2 className="pink-color">Special Iconography</h2>
          <p className="font-kamerik">
            Immerse yourself in seasonal charm with themed icons that reflect
            the current month and festive celebrations.
          </p>
        </div>
        <img className="scaled-logo" src={logo} alt="Logo"></img>
      </div>
    </div>
  );
};

export default Themes;
