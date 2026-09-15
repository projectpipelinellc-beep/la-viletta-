import { contact, featuredCategories } from '../data/site.js';
import Reveal from './Reveal.jsx';
import './Featured.css';

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Featured() {
  const [highlight, ...rest] = featuredCategories;

  return (
    <section id="favorites" className="section featured">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Fan Favorites</p>
          <h2 className="section-heading">What to Order First</h2>
          <p className="section-copy">
            A taste of what&rsquo;s waiting on the full menu&mdash;made fresh, served generously, and
            priced for the whole family.
          </p>
        </div>

        <div className="featured-highlight-grid">
          <Reveal as="article" className="featured-highlight">
            <div className="featured-highlight-media">
              {/* PLACEHOLDER: replace with a real photo of a whole La Villetta pizza pie */}
              <img
                src="/images/placeholders/featured-pizza.svg"
                alt={highlight.alt}
                loading="lazy"
                width="900"
                height="1080"
              />
            </div>
            <div className="featured-highlight-body">
              <p className="featured-highlight-tag">House Specialty</p>
              <h3 className="featured-highlight-title">{highlight.name}</h3>
              <p className="featured-highlight-desc">{highlight.description}</p>
              <a
                href={contact.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm featured-highlight-link"
              >
                View Full Menu
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="featured-list-heading">More to Love</h3>
            <div className="featured-list">
              {rest.map((category, index) => (
                <a
                  key={category.id}
                  href={contact.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-list-item"
                  aria-label={`${category.name} — View Full Menu`}
                >
                  <span className="featured-list-index" aria-hidden="true">
                    {String(index + 2).padStart(2, '0')}
                  </span>
                  <span className="featured-list-text">
                    <span className="featured-list-name">{category.name}</span>
                    <span className="featured-list-desc">{category.description}</span>
                  </span>
                  <span className="featured-list-arrow">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <p className="featured-footnote">
          See the complete menu and current selections at checkout on our online ordering site.
        </p>
      </div>
    </section>
  );
}
