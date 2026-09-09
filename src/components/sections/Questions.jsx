import { siteContent } from '../../data/siteContent';
import Section from '../ui/Section';

// Questions people ask before a first Friday, answered in full. No accordion.
function Questions() {
  const { questions } = siteContent;
  return (
    <Section id="questions" heading={questions.heading}>
      <dl className="max-w-prose divide-y divide-hairline">
        {questions.items.map((item) => (
          <div key={item.question} className="py-5 first:pt-0">
            <dt className="text-body font-semibold">{item.question}</dt>
            <dd className="mt-1 text-body">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export default Questions;
