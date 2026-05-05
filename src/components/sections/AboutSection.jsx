import { siteContent } from '../../data/siteContent';
import SectionHeader from '../ui/SectionHeader';

const aboutCards = [
  {
    label: 'CF',
    title: 'Our Community Focus',
    description:
      'We create a welcoming environment where students can ask questions, grow in faith, and build supportive relationships rooted in biblical truth.'
  },
  {
    label: 'USF',
    title: 'Our Student Culture',
    description:
      'GSF is designed for college life: practical, relational, and spiritually grounded. We encourage both personal discipleship and campus impact.'
  }
];

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Who We Are"
          title={siteContent.about.title}
          description={siteContent.about.description}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {aboutCards.map((card) => (
            <article
              key={card.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-green/30 hover:bg-white hover:shadow-xl"
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-xs font-bold tracking-wide text-brand-green ring-1 ring-brand-green/15 transition duration-300 group-hover:bg-brand-green group-hover:text-white">
                {card.label}
              </span>
              <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
