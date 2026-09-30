function Card({ title, description, linkLabel, linkUrl, icon }) {
  const isExternal = linkUrl?.startsWith('http');

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-green via-brand-green to-brand-red opacity-0 transition duration-300 group-hover:opacity-100" />
      {icon ? (
        <span
          className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-greenSoft text-xs font-bold tracking-wide text-brand-greenDark ring-1 ring-brand-green/15 transition duration-300 group-hover:scale-105 group-hover:bg-brand-green group-hover:text-white"
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{description}</p>
      {linkUrl ? (
        <a
          href={linkUrl}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition hover:gap-3 hover:text-brand-greenDark"
        >
          {linkLabel || 'Visit resource'}
          <span aria-hidden="true">-&gt;</span>
        </a>
      ) : null}
    </article>
  );
}

export default Card;
