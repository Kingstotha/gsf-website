# Good Seed Fellowship website

The site for Good Seed Fellowship (GSF), a Friday-night Bible study for students at the
University of South Florida under The Redeemed Christian Church of God. It is a single page
built with Vite, React and Tailwind CSS, and deployed on Vercel from the `dist` output.

The page answers one question first: which Marshall Student Center room is it this Friday?
That is computed from the dates in `src/data/events.js`, in Eastern time, so past dates
disappear on their own.

## Editing content

- `src/data/events.js` holds the dates, rooms and times, a list of Fridays with no meeting,
  and dated footnotes. The comment at the top explains each field. Unconfirmed dates are
  commented out at the bottom until a room is booked.
- `src/data/siteContent.js` holds every other word on the page: the about paragraphs, the
  two Friday entries, the questions and answers, contact details and the footer.
- `src/data/photos.js` holds the photo strip. It renders nothing while the array is empty.

### Photos

Drop image files into `src/assets/photos/`, then import each one at the top of
`src/data/photos.js` and add it to the array with alt text and a caption (the file shows an
example). The strip appears on the page as soon as the array has an entry.

## Running it

Node 18 or newer.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`). In development you can
add `?now=2026-10-23T19:00` to the URL to see what the page shows at another date.

```bash
npm run build
npm run preview
```

`npm run build` writes the site to `dist/`, which is what Vercel serves.

## Layout of the code

```text
src/
  App.jsx                    page order
  index.css                  font import, focus ring, rules
  lib/schedule.js            Eastern-time date logic, floor from room number, formatting
  data/
    events.js                dates, rooms, times, off Fridays, footnotes
    siteContent.js           all copy
    photos.js                photo strip entries
  components/
    layout/Masthead.jsx      name, links, menu button, GroupMe button
    layout/Footer.jsx
    sections/Plaque.jsx      this Friday's room
    sections/About.jsx
    sections/Schedule.jsx    the fall table
    sections/Fridays.jsx     Bible study and game night
    sections/PhotoStrip.jsx
    sections/Questions.jsx
    sections/Contact.jsx
    ui/Seal.jsx, Button.jsx, Section.jsx
```

`DESIGN-PLAN.md` records the design decisions. `CONTENT-TODO.md` lists the facts the site
still needs from the fellowship.
