import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
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
import CoreFeatures from "./components/CoreFeatures";
import Cores from "./components/Cores";
import Choose from "./components/Choose";
import Join from "./components/Join";
import Footer from "./components/Footer";
import PrivacyNotice from "./components/PrivacyNotice";

function App() {
  const appleurl =
    "https://apps.apple.com/us/app/our-time-together/id1633279048";
  const googleurl =
    "https://play.google.com/store/apps/details?id=com.MJA.ott&pli=1";
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header appleurl={appleurl} googleurl={googleurl} />
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
              <CoreFeatures />
              <Cores />
              <Choose />
              <Join appleurl={appleurl} googleurl={googleurl} />
            </>
          }
        />

        <Route path="/privacy" element={<PrivacyNotice />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
