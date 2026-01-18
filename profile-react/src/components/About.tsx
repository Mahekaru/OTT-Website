import activeIndicator from "../assets/Active-Indicator.svg";
import { useInView } from "../hooks/useInView";

const About = () => {
  const { ref, isVisible } = useInView();

  return (
    <>
      <div
        ref={ref}
        className={`container about-section mb-5 fade-in-up ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <h2 className="align-self-center">About Our App</h2>
        <img src={activeIndicator} alt="Active Indicator"></img>
        <h1 className="pink-color">
          Celebrate Your Love Journey With Our Time Together
        </h1>
        <p className="font-kamerik">
          Your ultimate companion for cherishing the beautiful moments you've
          shared with your partner. Whether you're starting a new relationship
          or you've been together for years, this passion project is here to
          help you mark the milestones of your relationship and celebrate each
          moment together.
        </p>
        <img src={activeIndicator} alt="Active Indicator"></img>
      </div>
    </>
  );
};

export default About;
