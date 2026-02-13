import blogPosts from "../data/blog";
import { useInView } from "../hooks/useInView";
import "../Updates.css";
import activeIndicator from "../assets/Active-Indicator.svg";

type BlogPost = {
  id: number;
  title: string;
  content: string;
  date: string;
};

const Updates = () => {
  const { ref, isVisible } = useInView();
  const visibleClass = isVisible ? "is-visible" : "";
  const posts = blogPosts as BlogPost[];

  return (
    <section className="updates-shell bg1">
      <div ref={ref} className="container col updates-section">
        <div className={`updates-heading fade-in-up ${visibleClass}`}>
          <p className="eyebrow">Product updates</p>
          <h2 className="pink-color">Fresh from the team</h2>
          <img
            src={activeIndicator}
            alt="Section divider"
            className="updates-indicator"
          />
          <p className="font-kamerik updates-subhead">
            New releases, design tweaks, and little quality-of-life fixes we are
            rolling out to keep Our Time Together feeling special.
          </p>
        </div>

        <div className="updates-grid">
          {posts.map(({ id, title, content, date }) => (
            <article
              key={id}
              className={`update-card fade-in-up ${visibleClass}`}
              aria-label={`Update posted on ${date}`}
            >
              <span className="update-date">{date}</span>
              <h3>{title}</h3>
              <p className="font-kamerik">{content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;