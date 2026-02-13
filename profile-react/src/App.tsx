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
import SavedData from "./components/SavedData";
import RelationshipData from "./components/RelationshipData";
import Animations from "./components/Animations";
import Cores from "./components/Cores";
import Choose from "./components/Choose";
import Join from "./components/Join";
import Footer from "./components/Footer";
import PrivacyNotice from "./components/PrivacyNotice";
import HeaderIndicator from "./components/HeaderIndicator";
import Contact from "./components/Contact";
import Updates from "./components/Updates";

function App() {
  const appleurl =
    "https://apps.apple.com/us/app/our-time-together/id1633279048";
  const googleurl =
    "https://play.google.com/store/apps/details?id=com.ourtimetogether.app";
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
                <HeaderIndicator header="New Features" />
                <AvatarIcon />
                <Themes />
                <NewLook />
              </div>
              <div className="bg2">
                <SavedData />
                <RelationshipData />
                <Animations />
              </div>
              <HeaderIndicator header="Core Features" />
              <Cores />
              <Choose />
              <Join appleurl={appleurl} googleurl={googleurl} />
            </>
          }
        />
        <Route path="/updates" element={<Updates />} />
        <Route path="/privacy" element={<PrivacyNotice />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
