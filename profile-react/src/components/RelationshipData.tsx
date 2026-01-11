import logo from "../assets/03-2-scaled.png";

const RelationshipData = () => {
  return (
    <div className="container col ">
      <div className="row no-wrap align-items-center mt-5">
        <img className="scaled-logo" src={logo} alt="Logo"></img>
        <div className="container col">
          <h1>Relationship Data</h1>

          <h2 className="pink-color">Flexibility for All Couples</h2>
          <p className="font-kamerik">
            Are you married? No problem – relationship data is now optional, and
            skippable during onboarding.
          </p>

          <h2 className="pink-color">Your Journey, Your Way</h2>
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
