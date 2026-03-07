import { siteContent } from '../../data/siteContent';
import SectionHeader from '../ui/SectionHeader';

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Who We Are"
          title={siteContent.about.title}
          description={siteContent.about.description}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Our Community Focus</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              We create a welcoming environment where students can ask questions, grow in faith,
              and build supportive relationships rooted in biblical truth.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Our Student Culture</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              GSF is designed for college life: practical, relational, and spiritually grounded.
              We encourage both personal discipleship and campus impact.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
