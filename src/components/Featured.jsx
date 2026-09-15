import { contact, featuredCategories } from '../data/site.js';
import Reveal from './Reveal.jsx';
import './Featured.css';

export default function Featured() {
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

        <div className="featured-grid">
          {featuredCategories.map((category, index) => (
            <Reveal as="article" key={category.id} className="featured-card" delay={index * 60}>
              <div className="featured-card-media">
                <img src={category.image} alt={category.alt} loading="lazy" width="600" height="450" />
              </div>
              <div className="featured-card-body">
                <h3 className="featured-card-title">{category.name}</h3>
                <p className="featured-card-desc">{category.description}</p>
                <a
                  href={contact.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link featured-card-link"
                >
                  View Full Menu
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="featured-footnote">
          See the complete menu and current selections at checkout on our online ordering site.
        </p>
      </div>
    </section>
  );
}
