import ottImage from "../assets/Frame-3.png";//bluesky-social-seeklogo.svg
import blueSky from "../assets/bluesky-social-seeklogo.svg";//tiktok-icon-seeklogo.svg
import tiktok from "../assets/tiktok-icon-seeklogo.svg";//
import privacyPdf from "../assets/Privacy Policy Generator.pdf";
import "../Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="row">
        <div className="items">
          <div>
            <div>
                <img src={ottImage} alt="Footer Image" className="footer-image"></img>
            </div>
            <div>
                <p>Celebrate Every Moment of Your Journey Together, Track, Cherish, and Enjoy!</p>
            </div>
            <div>
                <img src={blueSky} alt="Blue Sky"></img>
                <img src={tiktok} alt="TikTok"></img>
                <img src={tiktok} alt="Twitter"></img>
                <img src={tiktok} alt="YouTube"></img>
                <img src={tiktok} alt="Pinterest"></img>
                <img src={tiktok} alt="Facebook"></img>
            </div>
          </div>
          <div>
            <h2>Quick links</h2>
            <ul className="col">
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>
                <a href={privacyPdf} target="_blank" rel="noopener noreferrer">Privacy Notice</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Legal</h2>
            <ul>
              <li>
                <a href={privacyPdf} target="_blank" rel="noopener noreferrer">Privacy Notice</a>
              </li>
              <li>
                <a href="https://www.flaticon.com/" title="freepik icons">
                  Icons created by Freepik - Flaticon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© {currentYear} Our Time Together. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
