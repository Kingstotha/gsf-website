import { useState } from 'react';
import { siteContent } from '../../data/siteContent';
import SectionHeader from '../ui/SectionHeader';
import FAQItem from '../ui/FAQItem';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Questions"
          title="Frequently Asked Questions"
          description="A few common questions from students who are getting to know Good Seed Fellowship."
          centered
        />

        <div className="space-y-3">
          {siteContent.faqs.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              id={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
