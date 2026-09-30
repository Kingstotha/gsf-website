function SectionHeader({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} mb-10 max-w-3xl`}>
      {eyebrow ? (
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.17em] text-brand-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-[1.8rem] font-bold leading-[1.25] tracking-[-0.035em] text-slate-950 sm:text-[2.25rem]">
        {title}
      </h2>
      <div
        className={`${centered ? 'mx-auto' : ''} mt-5 h-0.5 w-10 bg-brand-green/60`}
        aria-hidden="true"
      />
      {description ? (
        <p className="mt-5 text-[15px] leading-8 text-slate-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
