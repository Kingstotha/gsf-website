import { siteContent } from '../../data/siteContent';
import Section from '../ui/Section';
import Seal from '../ui/Seal';

// Email, phone, GroupMe, Instagram and where, as a list on a dark block, with the seal beside it.
function Contact() {
  const { contact } = siteContent;
  return (
    <Section id="contact" heading={contact.heading} tone="ink">
      <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-start lg:justify-between">
        <dl className="w-full max-w-prose divide-y divide-paper/15 border-b border-paper/15">
          {contact.rows.map((row) => (
            <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
              <dt className="text-small text-pale">{row.label}</dt>
              <dd className="min-w-0 text-body">
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.external ? '_blank' : undefined}
                    rel={row.external ? 'noreferrer' : undefined}
                    className="link-on-dark break-words"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span>{row.value}</span>
                )}
                {row.note ? <span className="mt-1 block text-small text-paper/70">{row.note}</span> : null}
              </dd>
            </div>
          ))}
        </dl>
        <Seal size={160} decorative className="shrink-0 lg:mt-2" />
      </div>
    </Section>
  );
}

export default Contact;
