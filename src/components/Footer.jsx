import { contact, navLinks } from '../data/site.js';
import './Footer.css';

// Placeholder credit link — update `href` once a live Project Pipeline page is available.
const DESIGN_CREDIT_URL = '#';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand-name">La Villetta Pizza &amp; Pasta</p>
          <p className="footer-address">
            {contact.locationName} &mdash; {contact.entranceNote}
            <br />
            {contact.addressLine1}, {contact.addressLine2}
          </p>
          <a href={contact.phoneHref} className="footer-phone">
            {contact.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="footer-heading">Explore</p>
          <nav className="footer-links" aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href={contact.orderUrl} target="_blank" rel="noopener noreferrer">
              Menu &amp; Online Ordering
            </a>
          </nav>
        </div>

        <div>
          <p className="footer-heading">Connect</p>
          <nav className="footer-links" aria-label="Connect">
            <a href={contact.facebookUrl} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={contact.directionsUrl} target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          </nav>
          <div className="footer-catering">
            <a href="#catering" className="btn btn-sm btn-olive">
              Catering Inquiries
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {year} La Villetta Pizza &amp; Pasta. All rights reserved.</span>
        {/* Placeholder credit link — swap DESIGN_CREDIT_URL for a live URL when available */}
        <a href={DESIGN_CREDIT_URL} target="_blank" rel="noopener noreferrer">
          Website designed by Project Pipeline
        </a>
      </div>
    </footer>
  );
}
