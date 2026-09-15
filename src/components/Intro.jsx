import { introFeatures } from '../data/site.js';
import Reveal from './Reveal.jsx';
import './Intro.css';

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 10.3l2.4 2.4L14 7.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Intro() {
  return (
    <section id="about" className="section intro">
      <div className="container intro-grid">
        <Reveal className="intro-media">
          {/* PLACEHOLDER: replace with a real photo of a family-style table or the La Villetta dining room */}
          <img
            src="/images/placeholders/intro-table.svg"
            alt="A family-style table set for a meal at La Villetta"
            loading="lazy"
            width="1000"
            height="1200"
          />
        </Reveal>

        <Reveal delay={100}>
          <p className="section-eyebrow intro-eyebrow">About La Villetta</p>
          <h2 className="section-heading">A Local Table for Every Occasion</h2>
          <p className="intro-copy">
            La Villetta Pizza &amp; Pasta is a family-friendly restaurant serving traditional Italian
            cuisine in Jefferson Valley. Stop in for a quick slice, sit down for dinner with the family,
            order your favorites to go, or let us prepare the food for your next celebration.
          </p>

          <ul className="intro-features">
            {introFeatures.map((feature) => (
              <li key={feature} className="intro-feature">
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="intro-actions">
            <a href="#experience" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
