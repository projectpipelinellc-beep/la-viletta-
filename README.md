# La Villetta Pizza & Pasta — Website

A React + Vite marketing site for La Villetta Pizza & Pasta (Jefferson Valley Mall, Yorktown Heights, NY).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Editing site content

Almost everything a restaurant owner would need to change lives in one file:

**`src/data/site.js`**
- Contact info, phone, address, Facebook and ordering URLs
- Hours — currently left blank on purpose (see below)
- Reviews, featured menu categories, and feature lists

### Hours

`hours` in `src/data/site.js` is intentionally empty. Until real hours are entered,
the Visit section shows "Please call to confirm today's hours." To add real hours,
fill in any day like:

```js
monday: { open: '11:00 AM', close: '9:00 PM' },
```

Days left as `null` will show "Call to confirm" once at least one day has hours set.

### Replacing placeholder photos

Every image in `public/images/placeholders/` is a temporary illustrated stand-in —
each file has a `<!-- PLACEHOLDER -->` comment at the top identifying what real
photo should replace it. To swap one in:

1. Add the real photo to `public/images/` (JPEG/WebP recommended).
2. Update the `src` in the matching component (or the `image` field in
   `featuredCategories` inside `src/data/site.js` for the six menu category cards).

Replace `public/images/og-cover.svg` and `public/images/favicon.svg` with real
brand assets when available.

### Footer credit link

`src/components/Footer.jsx` has a `DESIGN_CREDIT_URL` placeholder constant —
update it once a live Project Pipeline page is available.

## Notes

- No menu items or prices are hard-coded anywhere; every "Order Online" and
  "View Menu" link points to the live ordering site.
- Built with plain React + CSS (no UI framework), so it stays fast and easy to hand off.
