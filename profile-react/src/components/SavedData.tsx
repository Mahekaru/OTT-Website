import logo from "../assets/Group-13796-1.png";
import { useInView } from "../hooks/useInView";

const SavedData = () => {
      const { ref, isVisible } = useInView();
      const visibleClass = isVisible ? "is-visible" : "";
    
  return (
    <div ref={ref} className="container col ">
      <div className="row no-wrap align-items-center mt-5">
        <div className="container col">
          <h1 className={`slide-in-right ${visibleClass}`}>Saved Data</h1>

          <h2 className={`pink-color fade-in-up ${visibleClass}`}>Data That Stays Safe</h2>
          <p className="font-kamerik">
            Never worry about lost memories. Our improved data-saving technology
            ensures that every moment you’ve recorded stays safe and secure,
            eliminating the risk of data loss.
          </p>

          <h2 className={`pink-color fade-in-up ${visibleClass}`}>Reliability First</h2>
          <p className="font-kamerik">
            Rest assured, even if the app updates or changes, your treasured
            moments remain intact.
          </p>
        </div>
        <img className="scaled-logo" src={logo} alt="Logo"></img>
      </div>
    </div>
  );
};

export default SavedData;
