import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import "../Contact.css";
import activeIndicator from "../assets/Active-Indicator.svg";
import { useInView } from "../hooks/useInView";

const CONTACT_EMAIL = "loveourtimetogether@gmail.com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { ref, isVisible } = useInView();
  const visibleClass = isVisible ? "is-visible" : "";

  const isSubmitDisabled = useMemo(() => {
    return email.trim().length === 0 || message.trim().length === 0;
  }, [email, message]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      name.trim().length > 0 ? `Message from ${name}` : "Message from OTT visitor"
    );
    const body = encodeURIComponent(
      [
        name.trim().length > 0 ? `Name: ${name}` : null,
        `Email: ${email || "(not provided)"}`,
        "",
        message || "",
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section ref={ref} className="contact bg1">
      <div className={`contact__header fade-in-up ${visibleClass}`}>
        <p className="contact__eyebrow">Need a hand?</p>
        <h1 className="contact__title">Let&apos;s talk</h1>
        <img
          src={activeIndicator}
          alt="Section divider"
          className="contact__indicator"
        />
        <p className="contact__subtitle">
          Tell us what you need, share feedback, or ask anything about Our Time Together.
          Every note goes straight to our inbox.
        </p>
        <div className="contact__badge">Responses within 1 business day</div>
      </div>

      <div className={`contact__grid fade-in-up ${visibleClass}`}>
        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="contact__label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="contact__input"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
          />

          <label className="contact__label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="contact__input"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />

          <label className="contact__label" htmlFor="message">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            className="contact__textarea"
            placeholder="Share a feature request, bug, or question."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            rows={6}
          />

          <div className="contact__actions">
            <button className="contact__submit" type="submit" disabled={isSubmitDisabled}>
              Send email
            </button>
            <span className="contact__hint">Opens your default email app</span>
          </div>
        </form>

        <div className="contact__panel">
          <h2 className="contact__panel-title">Prefer to type later?</h2>
          <p className="contact__panel-copy">
            Save our address and drop a note when it suits you.
          </p>
          <a className="contact__mailto" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <ul className="contact__list">
            <li>Product questions or walkthroughs</li>
            <li>Partnerships and press inquiries</li>
            <li>Support for billing or account issues</li>
          </ul>
          <div className="contact__footnote">We read every message—really.</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
