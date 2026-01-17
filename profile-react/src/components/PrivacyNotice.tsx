import React from "react";
import "../PrivacyNotice.css";
import privacyPdf from "../assets/Privacy Policy Generator.pdf";

const PrivacyNotice = () => {
  return (
    <section className="privacy-notice" id="privacy">
      <div className="privacy-notice__content">
        <div className="privacy-notice__header">
          <p className="privacy-notice__eyebrow">Privacy & Security</p>
          <h2 className="privacy-notice__title">Privacy Notice</h2>
          <p className="privacy-notice__copy">
            Review the full privacy notice anytime. You can open it in this page
            or download a copy to keep for your records.
          </p>
          <div className="privacy-notice__actions">
            <a
              className="privacy-notice__button"
              href={privacyPdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF
            </a>
            <a className="privacy-notice__button ghost" href={privacyPdf} download>
              Download
            </a>
          </div>
        </div>

        <div className="privacy-notice__viewer" aria-label="Privacy Notice PDF viewer">
          <object data={privacyPdf} type="application/pdf" title="Privacy Notice PDF">
            <p>
              Your browser could not display the PDF. You can
              <a href={privacyPdf} target="_blank" rel="noopener noreferrer">
                &nbsp;open it in a new tab
              </a>
              &nbsp;or download it instead.
            </p>
          </object>
        </div>
      </div>
    </section>
  );
};

export default PrivacyNotice;