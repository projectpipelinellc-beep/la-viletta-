import { contact, hours, hoursOrder } from '../data/site.js';
import Reveal from './Reveal.jsx';
import './Visit.css';

function HoursPanel() {
  const hasAnyConfirmedHours = hoursOrder.some(([key]) => hours[key]);

  return (
    <div className="visit-hours">
      <h3 className="visit-hours-title">Hours</h3>

      {hasAnyConfirmedHours ? (
        <ul className="visit-hours-list">
          {hoursOrder.map(([key, label]) => (
            <li key={key} className="visit-hours-row">
              <span className="visit-hours-day">{label}</span>
              <span className="visit-hours-value">
                {hours[key] ? `${hours[key].open} – ${hours[key].close}` : 'Call to confirm'}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="visit-hours-fallback">Please call to confirm today&rsquo;s hours.</p>
      )}
    </div>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="section visit">
      <div className="container visit-grid">
        <Reveal>
          <p className="section-eyebrow">Visit</p>
          <h2 className="section-heading visit-heading">Visit La Villetta</h2>

          <div className="visit-block">
            <p className="visit-label">Address</p>
            <p className="visit-address">
              <strong>{contact.name}</strong>
              {contact.locationName}
              <br />
              {contact.entranceNote}
              <br />
              {contact.addressLine1}
              <br />
              {contact.addressLine2}
            </p>
            <p className="visit-note">
              Located at Jefferson Valley Mall with a dedicated exterior entrance on the Route 6 side.
            </p>
          </div>

          <div className="visit-block">
            <p className="visit-label">Phone</p>
            <a href={contact.phoneHref} className="visit-phone">
              {contact.phoneDisplay}
            </a>
          </div>

          <div className="visit-actions">
            <a
              href={contact.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Directions
            </a>
            <a href={contact.phoneHref} className="btn btn-secondary">
              Call Now
            </a>
            <a
              href={contact.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-olive"
            >
              Order Online
            </a>
          </div>

          <HoursPanel />
        </Reveal>

        <Reveal delay={100} className="visit-map">
          <iframe
            src={contact.mapEmbedUrl}
            title="Map showing La Villetta Pizza & Pasta at Jefferson Valley Mall, Route 6 side entrance"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
