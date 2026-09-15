import { contact } from '../data/site.js';
import './MobileActionBar.css';

export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar" role="navigation" aria-label="Quick actions">
      <a href={contact.phoneHref} className="call-action">
        Call
      </a>
      <a href={contact.orderUrl} target="_blank" rel="noopener noreferrer" className="order-action">
        Order Online
      </a>
    </div>
  );
}
