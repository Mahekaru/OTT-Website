import activeIndicator1 from "../assets/Group-13796.svg";
import activeIndicator2 from "../assets/Group-13799.svg";
import activeIndicator3 from "../assets/Group-13801.svg";
import "../Cores.css";

const Cores = () => {
  return (
    <div className="container col no-wrap justify-content-center mt-5">
      <div className="cores">
        <div className="core">
          <div className="text-center">
            <img src={activeIndicator1} alt="Active Indicator"></img>
          </div>
          <div>
            <h3 className="text-center">
              Track your <br></br> Time Together
            </h3>
            <p className="text-center">
              Keep a meaningful record of the time you've spent as a couple.
              Each day adds to your unique journey, allowing you to watch as
              your love story unfolds with each passing moment.
            </p>
          </div>
        </div>
        <div className="core">
          <div className="text-center">
            <img src={activeIndicator2} alt="Active Indicator"></img>
          </div>
          <div>
            <h3 className="text-center">
              Track your <br></br> Time Together
            </h3>
            <p className="text-center">
              Celebrate relationship milestones with special badges that mark
              the moments that matter most. From your first date to
              anniversaries and beyond, every achievement becomes a shared
              celebration.
            </p>
          </div>
        </div>
        <div className="core">
          <div className="text-center">
            <img src={activeIndicator3} alt="Active Indicator"></img>
          </div>
          <div>
            <h3 className="text-center">
              Track your <br></br> Time Together
            </h3>
            <p className="text-center">
              Whether it's the small things or the big anniversaries, Our Time
              Together helps you commemorate each special moment, ensuring you
              always feel connected to the memories you've made as a couple.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cores;
