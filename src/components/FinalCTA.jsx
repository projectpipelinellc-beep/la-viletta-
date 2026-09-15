import { contact } from '../data/site.js';
import Reveal from './Reveal.jsx';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="section section--tight final-cta">
      <div className="container">
        <Reveal>
          <h2 className="final-cta-heading">Your Next Italian Meal Is Only a Click Away.</h2>
          <p className="final-cta-copy">
            Order your La Villetta favorites for pickup or delivery, or stop in and enjoy a meal with
            us.
          </p>
          <div className="final-cta-actions">
            <a href={contact.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-on-red">
              Order Online
            </a>
            <a href={contact.phoneHref} className="btn btn-outline-on-red">
              Call {contact.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
