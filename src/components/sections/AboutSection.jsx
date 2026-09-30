import { siteContent } from '../../data/siteContent';
import SectionHeader from '../ui/SectionHeader';
import Icon from '../ui/Icon';

const aboutCards = [
  {
    icon: 'people',
    title: 'Our Community Focus',
    description:
      'We create a welcoming environment where students can ask questions, grow in faith, and build supportive relationships rooted in biblical truth.'
  },
  {
    icon: 'book',
    title: 'Our Student Culture',
    description:
      'GSF is designed for college life: practical, relational, and spiritually grounded. We encourage both personal discipleship and campus impact.'
  }
];

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-16 sm:py-24">
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
              className="rounded-2xl border border-slate-200/80 bg-[#fafbf9] p-6 sm:p-8"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-greenSoft text-brand-green">
                <Icon name={card.icon} />
              </span>
              <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
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
