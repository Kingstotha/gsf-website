function Card({ title, description, linkLabel, linkUrl }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{description}</p>
      {linkUrl ? (
        <a
          href={linkUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex text-sm font-semibold text-brand-green transition hover:text-brand-greenDark"
        >
          {linkLabel || 'Visit resource'}
        </a>
      ) : null}
    </article>
  );
}

export default Card;
