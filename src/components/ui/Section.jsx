// A section is a heading with a short green bar above it, then its content.
// tone picks the surface: white paper, a pale green tint, or dark ink.
const tones = {
  paper: { section: 'border-t border-hairline bg-paper text-ink', bar: 'bg-green' },
  mint: { section: 'bg-mint text-ink', bar: 'bg-green' },
  ink: { section: 'bg-ink text-paper', bar: 'bg-pale' }
};

function Section({ id, heading, children, tone = 'paper', className = '' }) {
  const headingId = `${id}-heading`;
  const look = tones[tone] || tones.paper;
  return (
    <section id={id} aria-labelledby={headingId} className={`${look.section} ${className}`}>
      <div className="wrap py-12 sm:py-16">
        <span className={`mb-4 block h-[3px] w-12 ${look.bar}`} aria-hidden="true" />
        <h2 id={headingId} className="text-h2">
          {heading}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export default Section;
