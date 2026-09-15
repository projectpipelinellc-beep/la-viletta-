import { experienceFeatures } from '../data/site.js';
import Reveal from './Reveal.jsx';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container experience-grid">
        <Reveal>
          <p className="section-eyebrow experience-eyebrow">The Experience</p>
          <h2 className="section-heading experience-heading">More Than a Quick Slice</h2>
          <p className="experience-copy">
            Enjoy a relaxed meal indoors, dine outside when the weather allows, or join us for live
            music and special evenings. La Villetta brings approachable Italian dining to Jefferson
            Valley without the formal price tag.
          </p>

          <ul className="experience-list">
            {experienceFeatures.map((feature) => (
              <li key={feature.label} className="experience-item">
                <span className="mark" aria-hidden="true" />
                {feature.label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="experience-media">
          {/* PLACEHOLDER: replace with a real photo of La Villetta's outdoor seating or dining room ambiance */}
          <img
            src="/images/placeholders/experience-outdoor.svg"
            alt="Outdoor seating area at La Villetta in the evening"
            loading="lazy"
            width="1200"
            height="900"
          />
        </Reveal>
      </div>
    </section>
  );
}
