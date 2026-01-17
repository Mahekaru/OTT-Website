import map from "../assets/Group-1.png";
import appstoreimg from "../assets/Apple-1.svg";
import playstoreimg from "../assets/Google_Play_2022_logo.svg";
import "../Join.css";

interface Props {
  appleurl?: string;
  googleurl?: string;
}

const Join = (props: Props) => {
  return (
    <div className="container col my-5">
      <div className="pink-dark-color frame">
        <div className="align-self-center text-white">
          <h1 className="header">Join Thousands of Couples</h1>
          <h2>Who Celebrate Their Love Every Day</h2>
          <p>
            Download Our Time Together now and start your journey to marking the
            moments that define your relationship.
          </p>
          <div>
            <a className="mt-5" href={props.appleurl} target="_blank">
              <img
                className="app-store"
                src={appstoreimg}
                alt="App Store"
              ></img>
            </a>
            <a className="mt-2" href={props.googleurl} target="_blank">
              <img
                className="play-store"
                src={playstoreimg}
                alt="Play Store"
              ></img>
            </a>
          </div>
        </div>
        <div>
          <img src={map} alt="Our Time Together map" className="map-image" />
        </div>
      </div>
    </div>
  );
};

export default Join;
