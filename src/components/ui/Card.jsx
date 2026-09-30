import Icon from './Icon';

const iconNames = { BS: 'book', PR: 'heart', NW: 'people', MD: 'compass', GM: 'chat', IG: 'camera', EM: 'mail' };

function Card({ title, description, linkLabel, linkUrl, icon }) {
  const isExternal = linkUrl?.startsWith('http');

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7">
      {icon ? (
        <span
          className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-greenSoft text-brand-green"
          aria-hidden="true"
        >
          <Icon name={iconNames[icon]} />
        </span>
      ) : null}
      <h3 className="text-lg font-semibold tracking-tight text-slate-950">{title}</h3>
      <p className="mb-2 mt-3 text-sm leading-7 text-slate-600">{description}</p>
      {linkUrl ? (
        <a
          href={linkUrl}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
          className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand-green underline-offset-4 hover:underline"
        >
          {linkLabel || 'Visit resource'}
          <Icon name="arrow" className="h-4 w-4 shrink-0" />
        </a>
      ) : null}
    </article>
  );
}

export default Card;
