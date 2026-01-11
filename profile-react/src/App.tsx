import "./App.css";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "bootstrap/dist/js/bootstrap.min.js";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <>
      <Navigation />
      <Header appleurl="https://apps.apple.com/us/app/our-time-together/id1633279048" googleurl="https://play.google.com/store/apps/details?id=com.MJA.ott&pli=1" />
      <About />
    </>
  );
}

export default App;
