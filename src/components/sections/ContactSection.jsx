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
          description="Contact details below are placeholders and can be updated when your team shares official information."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">Contact Details</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>
                <span className="font-semibold text-slate-900">Email:</span> {contact.email}
              </li>
              <li>
                <span className="font-semibold text-slate-900">Phone:</span> {contact.phone}
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
            <form className="mt-4 space-y-4" action="#" method="post">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                />
              </div>
              <Button type="submit">Submit Message</Button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

