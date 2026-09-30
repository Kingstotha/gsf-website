import { siteContent } from '../../data/siteContent';
import SectionHeader from '../ui/SectionHeader';

const missionPoints = [
  {
    label: '01',
    title: 'Know Christ',
    description: 'Build a strong biblical foundation and personal walk with God.'
  },
  {
    label: '02',
    title: 'Grow Together',
    description: 'Learn, pray, and serve in a supportive student fellowship.'
  },
  {
    label: '03',
    title: 'Impact Campus',
    description: "Share God's love through practical care and intentional outreach."
  }
];

function MissionSection() {
  return (
    <section id="mission" className="scroll-mt-24 border-y border-brand-green/10 bg-brand-greenSoft py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Why"
          title={siteContent.mission.title}
          description={siteContent.mission.description}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {missionPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl border border-brand-green/10 bg-white p-6 sm:p-7"
            >
              <span className="mb-6 inline-flex text-xs font-semibold tracking-widest text-brand-green">
                {point.label}
              </span>
              <h3 className="text-base font-semibold text-slate-950">{point.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
