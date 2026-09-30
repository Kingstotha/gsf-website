import { siteContent } from '../../data/siteContent';
import { events } from '../../data/events';
import { formatEventDate, getEventDate, getSchedule } from '../../lib/eventSchedule';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

function HeroSection({ now }) {
  const { hero, tagline, intro, orgParent } = siteContent;
  const next = getSchedule(events, now).upcoming.find((event) => getEventDate(event.date));

  return (
    <section id="home" className="hero-pattern relative overflow-hidden border-b border-brand-green/10">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:py-20">
          <div className="fade-up order-1">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-greenDark">
              <span className="h-px w-8 bg-brand-green" aria-hidden="true" />
              {tagline}
            </p>
            <h1 className="font-serif text-[clamp(2.05rem,3.6vw,3.35rem)] font-bold leading-[1.18] tracking-[-0.045em] text-slate-950">
              {hero.title.split(', ').map((line, index) => (
                <span key={line} className={`block ${index === 2 ? 'text-brand-green' : ''}`}>{line}{index < 2 ? '.' : ''}</span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-[1.85] text-slate-700 sm:text-[17px]">{hero.subtitle}</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">{intro}</p>
            <div className="mt-8 flex flex-col gap-3 min-[380px]:flex-row">
              <Button href={hero.ctaPrimary.href} className="gap-3">
                {hero.ctaPrimary.label}<Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href={hero.ctaSecondary.href} variant="secondary">{hero.ctaSecondary.label}</Button>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-600" aria-label="Our fellowship">
              {['Bible study', 'Prayer', 'Community'].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-brand-green" aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>

          <div className="fade-up relative order-3 mx-auto w-full max-w-md lg:order-2" style={{ animationDelay: '100ms' }}>
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] border border-brand-green/10 bg-brand-green/5 sm:-inset-4" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white bg-white px-6 pb-7 pt-8 shadow-[0_16px_50px_-24px_rgba(18,82,51,0.25)] sm:px-8">
              <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-brand-green/10 bg-[#f4f8f3] p-4 sm:h-56 sm:w-56">
                <img src="/gsf-logo.svg.png" alt="Good Seed Fellowship emblem" width="224" height="224" className="h-full w-full rounded-full bg-white object-contain p-2" fetchpriority="high" />
              </div>
              <p className="mx-auto mt-6 max-w-xs text-center text-[10px] font-semibold uppercase leading-5 tracking-[0.15em] text-brand-green">{orgParent}</p>
              <blockquote className="mt-3 text-center font-serif text-lg font-bold leading-relaxed tracking-tight text-slate-950 sm:text-xl">{hero.verse}</blockquote>
              <div className="mt-7 grid gap-5 border-t border-slate-100 pt-6">
                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-greenSoft text-brand-green"><Icon name="book" className="h-[18px] w-[18px]" /></span>
                  <div><p className="text-sm font-semibold text-slate-900">Weekly Gatherings</p><p className="mt-1 text-xs leading-5 text-slate-600">Fellowship, worship, prayer, and Bible-centered learning.</p></div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-greenSoft text-brand-green"><Icon name="people" className="h-[18px] w-[18px]" /></span>
                  <div><p className="text-sm font-semibold text-slate-900">Christ-Centered Community</p><p className="mt-1 text-xs leading-5 text-slate-600">A welcoming space to grow spiritually and build friendships.</p></div>
                </div>
              </div>
            </div>
          </div>
        {next ? (
          <a href="#events" className="group order-2 flex flex-col gap-4 rounded-2xl border border-brand-green/20 bg-white/90 px-5 py-5 transition-colors hover:border-brand-green/40 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:order-3 lg:col-span-2">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green text-white"><Icon name="pin" /></span>
              <div><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-green">Next gathering</p><p className="mt-1 text-sm font-semibold text-slate-900"><time dateTime={next.date}>{formatEventDate(next.date, { weekday: 'short', month: 'short', day: 'numeric' })}</time>{' '}<span className="mx-2 text-slate-300" aria-hidden="true">/</span>{' '}{next.startTime} {next.timeZone}</p><p className="mt-1 text-xs leading-5 text-slate-600">{next.location}</p></div>
            </div>
            <span className="flex items-center gap-2 text-xs font-semibold text-brand-green">View the schedule<Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </a>
        ) : null}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
