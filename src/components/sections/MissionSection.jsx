import { siteContent } from '../../data/siteContent';
import SectionHeader from '../ui/SectionHeader';

function MissionSection() {
  return (
    <section id="mission" className="scroll-mt-24 bg-brand-greenSoft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Why"
          title={siteContent.mission.title}
          description={siteContent.mission.description}
        />

        <div className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-brand-green/20 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="mb-3 block text-3xl" aria-hidden="true">✝️</span>
            <h3 className="text-base font-semibold text-slate-900">Know Christ</h3>
            <p className="mt-2 text-sm text-slate-700">Build a strong biblical foundation and personal walk with God.</p>
          </article>
          <article className="rounded-2xl border border-brand-green/20 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="mb-3 block text-3xl" aria-hidden="true">🌱</span>
            <h3 className="text-base font-semibold text-slate-900">Grow Together</h3>
            <p className="mt-2 text-sm text-slate-700">Learn, pray, and serve in a supportive student fellowship.</p>
          </article>
          <article className="rounded-2xl border border-brand-green/20 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="mb-3 block text-3xl" aria-hidden="true">🌍</span>
            <h3 className="text-base font-semibold text-slate-900">Impact Campus</h3>
            <p className="mt-2 text-sm text-slate-700">Share God's love through practical care and intentional outreach.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
