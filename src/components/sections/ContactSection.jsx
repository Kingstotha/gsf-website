import { siteContent } from '../../data/siteContent';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

function ContactRow({ label, value, href }) {
  const content = href ? (
    <a href={href} className="break-words font-semibold text-slate-950 transition hover:text-brand-green">
      {value}
    </a>
  ) : (
    <span className="font-semibold text-slate-950">{value}</span>
  );

  return (
    <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition duration-300 hover:border-brand-green/30 hover:bg-white">
      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </span>
      <span className="mt-1 block text-sm">{content}</span>
    </li>
  );
}

function ContactSection() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="scroll-mt-24 bg-slate-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Reach Out"
          title="Contact Good Seed Fellowship"
          description="We would love to hear from you. Reach out by email, phone, or through our community spaces to connect with Good Seed Fellowship."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-950">Contact Details</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Send a message, call, or connect through our official community channels.
                </p>
              </div>
              <span className="inline-flex w-fit rounded-full bg-brand-greenSoft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
                USF Tampa
              </span>
            </div>

            <ul className="mt-6 grid gap-3">
              <ContactRow label="Email" value={contact.email} href={contact.mailtoLink} />
              <ContactRow label="Phone" value={contact.phone} href="tel:+18139668180" />
              <ContactRow label="Location" value={contact.location} />
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {contact.social.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-brand-green hover:bg-brand-greenSoft hover:text-brand-green"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-900/20 sm:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[5rem] bg-brand-green/25" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-greenSoft">
                Get Connected
              </p>
              <h3 className="mt-3 font-serif text-3xl font-black">Join the community</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{contact.messageBlurb}</p>
              <div className="mt-7 flex flex-col gap-3">
                <Button href={contact.mailtoLink} variant="light" className="w-full">
                  Send Us a Message
                </Button>
                <a
                  href="https://groupme.com/join_group/113682070/e5jNFBYh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-brand-greenSoft hover:bg-white/10"
                >
                  Join our GroupMe
                </a>
                <a
                  href="https://www.instagram.com/goodseedfellowship?igsh=cDd6b3hjdGZhcjE0"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-brand-greenSoft hover:bg-white/10"
                >
                  Instagram
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
