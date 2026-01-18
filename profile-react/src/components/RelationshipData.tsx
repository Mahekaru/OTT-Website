import logo from "../assets/03-2-scaled.png";
import { useInView } from "../hooks/useInView";

const RelationshipData = () => {
      const { ref, isVisible } = useInView();
      const visibleClass = isVisible ? "is-visible" : "";
    
  return (
    <div ref={ref} className="container col ">
      <div className="row no-wrap align-items-center mt-5">
        <img className="scaled-logo" src={logo} alt="Logo"></img>
        <div className="container col">
          <h1 className={`slide-in-right ${visibleClass}`}>Relationship Data</h1>

          <h2 className={`pink-color fade-in-up ${visibleClass}`}>Flexibility for All Couples</h2>
          <p className="font-kamerik">
            Are you married? No problem – relationship data is now optional, and
            skippable during onboarding.
          </p>

          <h2 className={`pink-color fade-in-up ${visibleClass}`}>Your Journey, Your Way</h2>
          <p className="font-kamerik">
            Before, you had to enter this information as part of the married
            setup. Now, it's completely optional—add it only if you want to.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RelationshipData;
