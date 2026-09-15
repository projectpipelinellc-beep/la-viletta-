import { ratings, reviews } from '../data/site.js';
import Reveal from './Reveal.jsx';
import './Reviews.css';

export default function Reviews() {
  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Reviews</p>
          <h2 className="section-heading">What Neighbors Are Saying</h2>
        </div>

        <div className="reviews-ratings">
          <span className="reviews-rating-pill">
            <span className="stars" aria-hidden="true">★★★★</span>
            {ratings.google.value} Stars on Google &mdash; {ratings.google.count} Reviews
          </span>
          <span className="reviews-rating-pill">
            <span className="stars" aria-hidden="true">★★★★</span>
            {ratings.facebook.value} Stars on Facebook &mdash; {ratings.facebook.count} Votes
          </span>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <Reveal as="figure" key={review.author} className="review-card" delay={index * 60}>
              <blockquote className="review-quote">&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption className="review-author">&mdash; {review.author}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
