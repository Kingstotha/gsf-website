// A section is a heading sitting on a hairline rule, then its content. No cards, no tints.
function Section({ id, heading, children, className = '' }) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`border-t border-hairline ${className}`}>
      <div className="wrap py-10 sm:py-14">
        <h2 id={headingId} className="text-h2">
          {heading}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export default Section;
