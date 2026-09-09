import { siteContent } from '../../data/siteContent';
import Section from '../ui/Section';

// The two kinds of Friday, side by side on a pale green tint, each with a green edge.
function Fridays() {
  const { fridays } = siteContent;
  return (
    <Section id="fridays" heading={fridays.heading} tone="mint">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        {fridays.items.map((item) => (
          <article key={item.title} className="border-l-[3px] border-green pl-5">
            <h3 className="text-lead font-semibold">{item.title}</h3>
            <p className="mt-2 text-body">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Fridays;
