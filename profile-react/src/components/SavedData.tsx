import logo from "../assets/Group-13796-1.png";

const SavedData = () => {
  return (
    <div className="container col ">
      <div className="row no-wrap align-items-center mt-5">
        <div className="container col">
          <h1>Saved Data</h1>

          <h2 className="pink-color">Data That Stays Safe</h2>
          <p className="font-kamerik">
            Never worry about lost memories. Our improved data-saving technology
            ensures that every moment you’ve recorded stays safe and secure,
            eliminating the risk of data loss.
          </p>

          <h2 className="pink-color">Reliability First</h2>
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
