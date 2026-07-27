import { Envelope, Lock, Shield, UserCheck } from '@boxicons/react';

const sections = [
  {
    title: 'Information we collect',
    content: (
      <>
        <p>We collect information that you voluntarily submit through our Contact and Request a Quote forms, including:</p>
        <ul>
          <li>Name, company name, email address, and phone number.</li>
          <li>Selected services, product category, estimated volume, timeline, and project location.</li>
          <li>Messages, specifications, and other information included in your enquiry.</li>
        </ul>
        <p>
          Our hosting and security providers may also process standard technical request data such as
          IP address, browser type, device information, and timestamps when the website is accessed.
        </p>
      </>
    ),
  },
  {
    title: 'How we use information',
    content: (
      <>
        <p>We use submitted information to:</p>
        <ul>
          <li>Respond to enquiries and prepare service or commercial quotations.</li>
          <li>Understand product, volume, quality, and operational requirements.</li>
          <li>Coordinate calls, meetings, facility visits, and potential service engagements.</li>
          <li>Maintain business records, improve our response process, and protect the website.</li>
          <li>Meet applicable legal, regulatory, or contractual requirements.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Service providers and disclosure',
    content: (
      <>
        <p>
          Form submissions are transmitted using EmailJS. Website hosting, email, security, and
          professional service providers may process information only as needed to support these
          functions. Some providers may process data from locations outside India.
        </p>
        <p>
          We do not sell personal information. We may disclose information where required by law,
          to protect legitimate business or security interests, or in connection with a business
          reorganisation.
        </p>
      </>
    ),
  },
  {
    title: 'Retention and security',
    content: (
      <>
        <p>
          We retain enquiry information only for as long as reasonably required to respond, manage
          a potential or active business relationship, keep necessary records, and meet applicable
          obligations.
        </p>
        <p>
          We use reasonable organisational and technical safeguards. However, no internet
          transmission or storage system can be guaranteed to be completely secure.
        </p>
      </>
    ),
  },
  {
    title: 'Your choices and requests',
    content: (
      <>
        <p>
          You may contact us to request access to, correction of, or deletion of personal
          information you submitted, or to withdraw a request where applicable. We may need to
          verify your identity and may retain limited records where required for legitimate or
          legal purposes.
        </p>
        <p>
          This business website is not intended for children, and we do not knowingly request
          personal information from children.
        </p>
      </>
    ),
  },
  {
    title: 'Cookies, external services, and updates',
    content: (
      <>
        <p>
          We do not currently use advertising or analytics cookies. Essential browser or hosting
          technologies may still be used for website delivery and security. Embedded maps and
          external links are operated by third parties under their own privacy practices.
        </p>
        <p>
          We may update this policy when our website, services, providers, or applicable
          requirements change. The latest version will be posted on this page with its revision
          date.
        </p>
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-blue-50 via-white to-orange-50 px-6 py-12 md:py-16">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">Legal</span>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Privacy <span className="text-blue-600">Policy</span>
          </h1>
          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            How NGPS Multitech Private Limited handles information submitted through this website.
          </p>
          <p className="mt-4 text-sm font-medium text-slate-500">Last updated: 28 July 2026</p>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm lg:sticky lg:top-28">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Shield size="26px" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900">Our approach</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We use business enquiry information to respond, prepare quotes, and coordinate
                services. We do not sell personal information.
              </p>
              <div className="mt-6 space-y-3 border-t border-blue-100 pt-5">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Lock size="19px" className="text-orange-500" />
                  Reasonable safeguards
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <UserCheck size="19px" className="text-orange-500" />
                  Request-based support
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-5 lg:col-span-8">
            <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-5 text-sm leading-6 text-slate-700">
              This policy applies to information handled through the NGPS website. A separate
              written service agreement may contain additional terms for an active client project.
            </div>

            {sections.map((section, index) => (
              <article key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                    <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
                      {section.content}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8">
              <div className="flex items-center gap-3 text-blue-600">
                <Envelope size="24px" />
                <h2 className="text-xl font-bold text-slate-900">Privacy contact</h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                For privacy questions or requests, email{' '}
                <a className="font-semibold text-blue-600 hover:text-orange-500" href="mailto:ngpsmultitech@gmail.com">
                  ngpsmultitech@gmail.com
                </a>{' '}
                or write to Unit No. 14, Bamnoli Village, Dwarka Sector 28, New Delhi – 110077.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
