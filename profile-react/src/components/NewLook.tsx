import logo from "../assets/Frame-15497.png";
import { useInView } from "../hooks/useInView";

const NewLook = () => {
      const { ref, isVisible } = useInView();
      const visibleClass = isVisible ? "is-visible" : "";
    
  return (
    <div ref={ref} className="container col ">
      <div className="row no-wrap align-items-center mt-5">
        <img className="scaled-logo" src={logo} alt="Logo"></img>
        <div className="container col">
          <h1 className={`slide-in-right ${visibleClass}`}>New Look</h1>
          <h2 className={`pink-color fade-in-up ${visibleClass}`}>Simplified Interface</h2>
          <p className="font-kamerik">
            Enjoy a refreshed design that makes it easier than ever to see your
            time together. Now, you can view both simple time together and total
            time spent in one place.
          </p>

          <h2 className={`pink-color fade-in-up ${visibleClass}`}>Enhanced User Experience</h2>
          <p className="font-kamerik">
            No more choosing between time views our new look brings everything
            you care about to one screen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewLook;
