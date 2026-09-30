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
    <section id="mission" className="scroll-mt-24 bg-brand-greenSoft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Why"
          title={siteContent.mission.title}
          description={siteContent.mission.description}
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {missionPoints.map((point) => (
            <article
              key={point.title}
              className="group rounded-2xl border border-brand-green/20 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-lg"
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-xs font-bold tracking-wide text-white transition duration-300 group-hover:scale-105">
                {point.label}
              </span>
              <h3 className="text-base font-semibold text-slate-950">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
