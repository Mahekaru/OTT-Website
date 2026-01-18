import ottImage from "../assets/Frame-3.png";//bluesky-social-seeklogo.svg
import "../Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollto = (val: number) => {
    window.scrollTo({ top: val, behavior: "smooth" });
  }

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
                <div className="social-icons">
                  <a
                    href="https://bsky.app/profile/ourtimetogether.bsky.social"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bluesky"
                  >
                    <i className="fa-brands fa-bluesky" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@ottlove?lang=en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                  >
                    <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://x.com/OTTMobileApp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (formerly Twitter)"
                  >
                    <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@OTTLApp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                  </a>
                                    <a
                    href="https://www.pinterest.com/ottmobileapp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pinterest"
                  >
                    <i className="fa-brands fa-pinterest" aria-hidden="true"></i>
                  </a>
                </div>
            </div>
          </div>
          <div>
            <h2>Quick links</h2>
            <ul className="col">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollto(0); }}>Home</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollto(550); }}>About</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollto(1300); }}>Features</a>
              </li>
              <li>
                <a href="/privacy" rel="noopener noreferrer">Privacy Notice</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Legal</h2>
            <ul>
              <li>
                <a href="/privacy" rel="noopener noreferrer">Privacy Notice</a>
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
