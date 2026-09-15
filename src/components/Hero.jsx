import { contact, trustRow } from '../data/site.js';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-media" aria-hidden="true">
        {/* PLACEHOLDER: replace with a real cinematic photo of a La Villetta pizza, pasta dish, or dining room */}
        <img src="/images/placeholders/hero-dining.svg" alt="" loading="eager" fetchpriority="high" width="1600" height="1000" />
      </div>

      <div className="container hero-content">
        <p className="hero-eyebrow">Jefferson Valley&rsquo;s Neighborhood Italian Kitchen</p>
        <h1 className="hero-headline">Traditional Italian Food, Made for the Whole Family.</h1>
        <p className="hero-copy">
          From crispy pizza and comforting pasta to classic Italian entr&eacute;es, heroes, desserts, and
          catering&mdash;La Villetta serves generous portions at wallet-friendly prices.
        </p>

        <div className="hero-actions">
          <a href={contact.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Order Online
          </a>
          <a href={contact.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-on-red">
            View Menu
          </a>
          <a href={contact.phoneHref} className="text-link hero-call-link">
            Call {contact.phoneDisplay}
          </a>
        </div>

        <ul className="hero-trust-row">
          {trustRow.map((item) => (
            <li key={item.label} className="hero-trust-item">
              <span className="dot" aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
