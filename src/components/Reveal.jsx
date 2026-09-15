import useReveal from '../hooks/useReveal.js';

// Wraps children in a fade-up reveal on scroll. `as` lets callers pick the
// element type (div, li, etc.) and `delay` staggers groups of cards.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, isVisible] = useReveal();
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
