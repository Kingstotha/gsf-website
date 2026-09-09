# Design plan

The one true thing about GSF that no other campus group can say: it is a Friday-night Bible
study that meets in a *different borrowed room in the Marshall Student Center almost every
week*. The page exists to answer "which room is it this Friday?" Everything else is small print.

## Color

| Name       | Hex       | Role |
|------------|-----------|------|
| Paper      | `#FFFFFF` | Page ground. Plain white, not cream. |
| Ink        | `#141414` | All headings and body text, the 2px masthead rule, the outlined button. |
| Pencil     | `#5B5B5B` | Secondary text: floor notes, times, captions, footer lines. 6.9:1 on Paper. |
| Hairline   | `#D4D4D4` | 1px rules between rows and sections. Never carries text. |
| Green      | `#1C7A4B` | The RCCG anchor, spent in one place: this Friday's room number. Also text links and focus rings. 5.3:1 on Paper. |
| Deep green | `#125233` | Link hover only. The "Next" mark on the schedule is the word in Green, unfilled, so there is no badge. |

Removed from `tailwind.config.js`: greenSoft, red, redSoft, blue, cream, and the soft shadow.

## Type

One family: **Archivo** (Google Fonts, variable width 62–125 and weight 100–900). A grotesque
in the lineage of American public signage, which is what a door plaque is. Its width axis lets
the four-digit room number sit wide and heavy (`wdth 112`, `wght 800`) while the same file sets
body text at normal width. Tabular lining figures on every number so 2706 and 3712 take the same
space and the layout never shifts from week to week.

| Token   | Size / line-height | Weight | Use |
|---------|--------------------|--------|-----|
| room    | clamp(5rem, 18vw, 10.5rem) / 0.9, tracking -0.03em | 800, width 112 | The room number in the hero. Nothing else. |
| name    | clamp(1.75rem, 5vw, 3rem) / 1.05 | 600 | The room name under the number. |
| lead    | 1.25rem / 1.45 | 400 | The two hero sentences (when; what and floor). |
| h2      | 1.5rem / 1.2, tracking -0.01em | 700 | Section titles in sentence case, sitting on a rule. |
| row     | 1.375rem / 1.1 | 700 | Room numbers in the schedule rows. |
| body    | 1.0625rem / 1.6 | 400 | Paragraphs, answers, row text. Measure capped at 44rem. |
| small   | 0.875rem / 1.45 | 500 | Times, floors, captions, labels. Sentence case, never all caps. |

## Layout

One 68rem column with a 1.5rem gutter; the hero and the schedule use the whole column, prose
stays inside a 44rem measure, and every section is plain type under a hairline rule.

```
+------------------------------------------------------------------------------+
| (o) Good Seed Fellowship        Fall 2026   Fridays   Questions   Contact  [Join the GroupMe]
+==============================================================================+  2px Ink + 1px Hairline (double rule)
|                                                                              |
|  This Friday, September 11                                    (lead, Ink)    |
|  2706  Ybor Room                        (room: Archivo 800 wide, Green; name in Ink)
|  Bible study, 7:00 to 8:45 PM. Marshall Student Center, second floor.        |
|  See the fall schedule    Join the GroupMe                    (green links)  |
|                                                                              |
|  Good Seed Fellowship is a Bible study for USF students, run under The        |  About + Mission merged,
|  Redeemed Christian Church of God. Friday nights, Marshall Student Center;    |  no heading, seal at 120px
|  the room changes most weeks. Any USF student can come.          [seal]      |  beside it
|------------------------------------------------------------------------------|
|  Fall 2026                                                                   |
|  Fri Sep 11  Next | 2706 Ybor Room, second floor | Bible study   | 7:00-8:45 PM
|  Fri Sep 25       | 2707 Spirit Room, second floor| Bible study   | 7:00-8:45 PM
|- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |  dashed Ink rule = game night
|  Fri Oct 2        | 3712 Columbia Room, third floor| Game night, with food | 7:30-9:15 PM
|  ... upcoming rows only; past rows are not rendered                          |
|  No meeting Friday, September 18. (date-gated footnotes)                     |
|------------------------------------------------------------------------------|
|  Fridays          Bible study ......   Game night ......   (two entries, rules between)
|------------------------------------------------------------------------------|
|  [photo strip: renders nothing until src/data/photos.js has entries]         |
|------------------------------------------------------------------------------|
|  Questions        Q in 600 / A in body, a rule between each, no accordion    |
|------------------------------------------------------------------------------|
|  Contact          Email / Phone / GroupMe / Instagram / Where, as a list     |
+==============================================================================+
|  (o) part of The Redeemed Christian Church of God · John 15:5 · copyright    |
+------------------------------------------------------------------------------+
Mobile (375px): same order, one column. Masthead is seal + name + a "Menu" button that
opens a plain list. Room number drops to 5rem. Each schedule row stacks: date and Next mark;
room number, name and floor; what and time on one line.
```

## Principles

1. The room number is the first and largest thing on the page. It is computed from today's
   date in Eastern time, so the page is never about a Friday that already happened.
2. Every visible element is a fact, a date, a room, a link, or the seal. Sentences that would
   survive on another ministry's site are cut.
3. Colour is spent once. Green is the room number; everything else is ink on paper and 1px rules.
4. No motion beyond smooth scroll (off under reduced motion). No cards, no shadows, no radii
   except the circle-cropped seal, no icons, no eyebrows, no numbered markers.

## Self-review: what I would have done for a generic brief, and what changed

- **Sticky blurred nav with a green pill button.** Generic. Changed to a static masthead closed
  by a newspaper double rule, links underlined only for the current section, and one
  Ink-outlined square button whose label says what happens.
- **Serif headline + sans body pairing (Newsreader, Fraunces, Instrument Serif).** Generic; the
  judges called it the "editorial minimal" template. Changed to one grotesque doing everything
  through width and weight.
- **Huge condensed headline sentence.** Generic; that's the agency/brutalist look. Changed so the
  number leads on its own line at normal-to-wide width, with the date as a plain lead line above.
- **Room number on a solid green block.** Generic; big-number-on-colour-block is a poster trope.
  Changed to a green number on white paper, so the only colour on the page is the room itself.
- **Upcoming-events cards with a Next pill and a Past list.** Generic. Changed to a real table
  with a visually hidden header row, dashed ink rule for game nights, floor under every room,
  and no Past list at all.
- **An accordion FAQ with six padded questions.** Generic. Changed to visible questions and
  answers, only the ones the facts can answer.
- **Three resource cards with two-letter icons.** Generic. Folded into the Contact list.
- **Logo in a ring in the hero.** Generic. The seal is shown once at real size beside the
  sentence its ring proves (the parent church), and small in the masthead and footer.

## Revision, September 9, 2026

The owner found the all-white version too plain, so colour and surfaces came back in a
controlled way: the room number sits on a full-width deep green plaque (white type, pale
green lead line); the Fridays section is a pale green tint with two green-edged columns;
the next schedule row is tinted with a green edge and game nights carry a small green
square; Contact and the footer are one dark ink block with the seal beside the list; the
GroupMe button is filled green; headings carry a short green bar; and the plaque fades in
once on load (off under reduced motion). Still absent on purpose: gradient blobs, uniform
cards with shadows, all-caps eyebrow labels, hover lifts, and per-section animations.
