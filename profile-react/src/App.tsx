import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "bootstrap/dist/js/bootstrap.min.js";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import AvatarIcon from "./components/AvatarIcon";
import Themes from "./components/Themes";
import NewLook from "./components/NewLook";
import NewFeature from "./components/NewFeature";
import SavedData from "./components/SavedData";
import RelationshipData from "./components/RelationshipData";
import Animations from "./components/Animations";

function App() {
  return (
    <>
      <Navigation />
      <Header
        appleurl="https://apps.apple.com/us/app/our-time-together/id1633279048"
        googleurl="https://play.google.com/store/apps/details?id=com.MJA.ott&pli=1"
      />
      <About />
      <div className="bg1">
        <NewFeature />
        <AvatarIcon />
        <Themes />
        <NewLook />
      </div>
      <div className="bg2">
        <SavedData />
        <RelationshipData />
        <Animations />
      </div>
    </>
  );
}

export default App;
