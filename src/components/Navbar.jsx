import { useEffect, useState } from 'react';
import { contact, navLinks } from '../data/site.js';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`navbar${isScrolled ? ' is-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#home" className="navbar-logo" onClick={closeMenu} aria-label="La Villetta Pizza & Pasta, home">
            <span className="navbar-logo-main">La Villetta</span>
            <span className="navbar-logo-sub">Pizza &amp; Pasta</span>
          </a>

          <nav className="navbar-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a
              href={contact.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-menu-link"
            >
              View Menu
            </a>
          </nav>

          <div className="navbar-actions">
            <a
              href={contact.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Order Online
            </a>
          </div>

          <button
            type="button"
            className="navbar-toggle"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
          </button>
        </div>
      </header>

      {/* Rendered outside <header> on purpose: the header's backdrop-filter
          creates a new containing block for fixed-position descendants in
          Chromium/WebKit, which would break this panel's full-height layout. */}
      {isMenuOpen && (
        <div className="navbar-mobile-panel" id="mobile-menu">
          <nav aria-label="Mobile">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a
              href={contact.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-menu-link"
              onClick={closeMenu}
            >
              View Menu
            </a>
          </nav>
          <div className="navbar-mobile-actions">
            <a
              href={contact.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={closeMenu}
            >
              Order Online
            </a>
            <a href={contact.phoneHref} className="btn btn-secondary" onClick={closeMenu}>
              Call {contact.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
