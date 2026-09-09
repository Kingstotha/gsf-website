import { siteContent } from '../../data/siteContent';
import Section from '../ui/Section';

// The two kinds of Friday, as two run-in paragraphs. Two because two are verifiable.
function Fridays() {
  const { fridays } = siteContent;
  return (
    <Section id="fridays" heading={fridays.heading}>
      <div className="max-w-prose space-y-4 text-body">
        {fridays.items.map((item) => (
          <p key={item.title}>
            <strong className="font-semibold">{item.title}</strong> {item.body}
          </p>
        ))}
      </div>
    </Section>
  );
}

export default Fridays;
