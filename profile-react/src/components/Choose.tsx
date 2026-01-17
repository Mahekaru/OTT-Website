import frame from "../assets/Frame-13397.png";
import activeIndicator from "../assets/Active-Indicator-1.svg";
import "../Choose.css";

const Choose = () => {
  return (
    <div className="container col my-5">
      <div className="bg-pink frame">
        <div className="align-self-center">
          <h2>Why Choose</h2>
          <h1 className="header">Our Time Together</h1>
          <img src={activeIndicator} alt="Our Time Together" />
          <p>
            Our Time Together isn’t just a tracking app; it’s a companion in
            your love story. Built with heartfelt intention, each feature is
            designed to celebrate love in all its forms. As you journey through
            life with your partner, let Our Time Together remind you of every
            cherished moment along the way.
          </p>
        </div>
        <div>
          <img src={frame} alt="Our Time Together" className="frame-image" />
        </div>
      </div>
    </div>
  );
};

export default Choose;
