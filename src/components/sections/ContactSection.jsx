import { siteContent } from '../../data/siteContent';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

function ContactSection() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="scroll-mt-24 bg-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Reach Out"
          title="Contact Good Seed Fellowship"
          description="We would love to hear from you. Reach out by email, phone, or through our community spaces to connect with Good Seed Fellowship."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">Contact Details</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>
                <span className="font-semibold text-slate-900">Email:</span>{' '}
                <a
                  href={contact.mailtoLink}
                  className="transition hover:text-brand-green"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <span className="font-semibold text-slate-900">Phone:</span>{' '}
                <a href="tel:+18139668180" className="transition hover:text-brand-green">
                  {contact.phone}
                </a>
              </li>
              <li>
                <span className="font-semibold text-slate-900">Location:</span> {contact.location}
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {contact.social.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-brand-green hover:text-brand-green"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">Send a Message</h3>
            <p className="mt-4 text-sm leading-6 text-slate-700">{contact.messageBlurb}</p>
            <div className="mt-4 rounded-2xl border border-brand-green/20 bg-brand-greenSoft p-5">
              <p className="text-sm leading-6 text-slate-700">
                Clicking the button below opens your default email app and starts a message to{' '}
                <a
                  href={contact.mailtoLink}
                  className="font-semibold text-brand-green transition hover:text-brand-greenDark"
                >
                  {contact.email}
                </a>{' '}
                with the subject line "Message from Good Seed Fellowship Website."
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={contact.mailtoLink}>Send Us a Message</Button>
              <a
                href="https://groupme.com/join_group/113682070/e5jNFBYh"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-brand-green px-5 py-2.5 text-sm font-semibold text-brand-green transition hover:bg-brand-greenSoft"
              >
                Join our GroupMe
              </a>
              <a
                href="https://www.instagram.com/goodseedfellowship?igsh=cDd6b3hjdGZhcjE0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand-green hover:text-brand-green"
              >
                Instagram
              </a>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Messages from this section go directly to {contact.email}.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

