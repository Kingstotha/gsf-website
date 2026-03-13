import { siteContent } from '../../data/siteContent';
import Button from '../ui/Button';

function HeroSection() {
  const { hero, tagline, intro } = siteContent;

  return (
    <section id="home" className="relative overflow-hidden bg-brand-cream">
      <div className="hero-bg-shape hero-bg-shape-top" aria-hidden="true" />
      <div className="hero-bg-shape hero-bg-shape-bottom" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div className="fade-up">
          <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green shadow-sm">
            {tagline}
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">{hero.subtitle}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600">{intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href={hero.ctaPrimary.href} className="w-full justify-center sm:w-auto">
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="secondary" className="w-full justify-center sm:w-auto">
              {hero.ctaSecondary.label}
            </Button>
          </div>
        </div>

        <div className="fade-up relative" style={{ animationDelay: '120ms' }}>
          <div className="relative overflow-hidden rounded-3xl border border-brand-green/20 bg-white shadow-soft">
            <div className="h-2 w-full bg-brand-green" aria-hidden="true" />
            <div className="px-6 pb-2 pt-6">
              <img
                src="/gsf-logo.svg.png"
                alt="Good Seed Fellowship emblem"
                className="mx-auto h-44 w-44 rounded-full bg-white p-2 shadow"
              />
              <p className="mt-3 text-center text-xs italic text-slate-500">{hero.verse}</p>
            </div>
            <div className="space-y-4 p-6 pt-4">
              <div className="rounded-xl bg-brand-greenSoft p-4">
                <p className="text-sm font-semibold text-brand-greenDark">Weekly Gatherings</p>
                <p className="mt-1 text-sm text-slate-700">Bible study, prayer, and fellowship for USF students.</p>
              </div>
              <div className="rounded-xl bg-brand-redSoft p-4">
                <p className="text-sm font-semibold text-brand-red">Christ-Centered Community</p>
                <p className="mt-1 text-sm text-slate-700">A welcoming space to grow spiritually and build real friendships.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default HeroSection;
