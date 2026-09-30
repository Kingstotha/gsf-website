import { siteContent } from '../../data/siteContent';
import Button from '../ui/Button';

function HeroSection() {
  const { hero, tagline, intro, orgParent } = siteContent;

  return (
    <section id="home" className="relative overflow-hidden bg-brand-cream hero-pattern">
      <div className="hero-bg-shape hero-bg-shape-top" aria-hidden="true" />
      <div className="hero-bg-shape hero-bg-shape-bottom" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
        <div className="fade-up relative z-10">
          <p className="mb-4 inline-flex rounded-full border border-brand-green/20 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-green shadow-sm backdrop-blur">
            {tagline}
          </p>
          <h1 className="font-serif text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            {hero.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href={hero.ctaPrimary.href} className="w-full justify-center sm:w-auto">
              {hero.ctaPrimary.label}
            </Button>
            <Button
              href={hero.ctaSecondary.href}
              variant="secondary"
              className="w-full justify-center sm:w-auto"
            >
              {hero.ctaSecondary.label}
            </Button>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            {['Bible study', 'Prayer', 'Community'].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
              >
                <p className="font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up relative z-10" style={{ animationDelay: '120ms' }}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-2xl shadow-brand-green/10 backdrop-blur">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[4rem] bg-brand-greenSoft" />
            <div className="relative mx-auto flex h-56 w-56 items-center justify-center rounded-full bg-brand-greenSoft p-4 ring-1 ring-brand-green/15 sm:h-64 sm:w-64">
              <img
                src="/gsf-logo.svg.png"
                alt="Good Seed Fellowship emblem"
                className="h-full w-full rounded-full bg-white object-contain p-3 shadow-soft"
              />
            </div>

            <div className="relative mt-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                {orgParent}
              </p>
              <p className="mt-3 font-serif text-xl font-bold text-slate-950">
                {hero.verse}
              </p>
            </div>

            <div className="relative mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-start justify-between gap-4 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950">Weekly Gatherings</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Fellowship, worship, prayer, and Bible-centered learning.
                  </p>
                </div>
                <span className="rounded-full bg-brand-greenSoft px-3 py-1 text-xs font-semibold text-brand-green">
                  USF
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950">Christ-Centered Community</p>
                  <p className="mt-1 text-sm text-slate-600">
                    A welcoming space to grow spiritually and build friendships.
                  </p>
                </div>
                <span className="rounded-full bg-brand-redSoft px-3 py-1 text-xs font-semibold text-brand-red">
                  GSF
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default HeroSection;
