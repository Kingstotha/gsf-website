function SectionHeader({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} mb-10 max-w-3xl`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <div
        className={`${centered ? 'mx-auto' : ''} mt-4 h-1 w-16 rounded-full bg-brand-green`}
        aria-hidden="true"
      />
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
