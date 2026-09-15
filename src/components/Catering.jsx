import { contact } from '../data/site.js';
import Reveal from './Reveal.jsx';
import './Catering.css';

export default function Catering() {
  return (
    <section id="catering" className="section catering">
      <div className="container catering-grid">
        <Reveal className="catering-media">
          {/* PLACEHOLDER: replace with a real photo of a La Villetta catering spread or shared table */}
          <img
            src="/images/placeholders/catering-spread.svg"
            alt="A shared table of Italian dishes prepared for a group"
            loading="lazy"
            width="1200"
            height="900"
          />
        </Reveal>

        <Reveal delay={100}>
          <p className="section-eyebrow catering-eyebrow">Catering</p>
          <h2 className="section-heading">Bring La Villetta to Your Next Gathering</h2>
          <p className="catering-copy">
            Planning a family celebration, office lunch, holiday party, or community event? Let La
            Villetta handle the food with crowd-pleasing Italian favorites prepared for groups of all
            sizes.
          </p>

          <div className="catering-actions">
            <a href={contact.phoneHref} className="btn btn-primary">
              Call About Catering
            </a>
            <a href={contact.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View Menu
            </a>
          </div>

          <p className="catering-note">
            Call to discuss group size, timing, and options&mdash;we&rsquo;ll help you plan a menu that
            fits your event.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
