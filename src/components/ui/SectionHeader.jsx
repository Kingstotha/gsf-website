function SectionHeader({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} mb-8 max-w-3xl`}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-slate-700 sm:text-lg">{description}</p> : null}
    </div>
  );
}

export default SectionHeader;
