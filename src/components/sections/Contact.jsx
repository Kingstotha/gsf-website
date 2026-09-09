import { siteContent } from '../../data/siteContent';
import Section from '../ui/Section';

// Email, phone, GroupMe, Instagram and where, as a plain list. No form, no map, no icons.
function Contact() {
  const { contact } = siteContent;
  return (
    <Section id="contact" heading={contact.heading}>
      <dl className="max-w-prose divide-y divide-hairline border-b border-hairline">
        {contact.rows.map((row) => (
          <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
            <dt className="text-small text-pencil">{row.label}</dt>
            <dd className="min-w-0 text-body">
              {row.href ? (
                <a
                  href={row.href}
                  target={row.external ? '_blank' : undefined}
                  rel={row.external ? 'noreferrer' : undefined}
                  className="link break-words"
                >
                  {row.value}
                </a>
              ) : (
                <span>{row.value}</span>
              )}
              {row.note ? <span className="mt-1 block text-small text-pencil">{row.note}</span> : null}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export default Contact;
