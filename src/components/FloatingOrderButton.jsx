import { useEffect, useState } from 'react';
import { contact } from '../data/site.js';
import './FloatingOrderButton.css';

export default function FloatingOrderButton() {
  const [pastHero, setPastHero] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const isVisible = pastHero && !nearFooter;

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide once the footer scrolls into view so the button never covers footer links.
  useEffect(() => {
    const footer = document.getElementById('site-footer');
    if (!footer) return undefined;
    const observer = new IntersectionObserver(([entry]) => setNearFooter(entry.isIntersecting), {
      rootMargin: '0px 0px -10% 0px',
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={contact.orderUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-order-button${isVisible ? ' is-visible' : ''}`}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      Order Online
    </a>
  );
}
