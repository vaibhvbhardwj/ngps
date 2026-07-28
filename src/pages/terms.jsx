import { CheckCircle, Envelope, File, Shield } from '@boxicons/react';

const terms = [
  {
    title: 'Website purpose and acceptance',
    body: (
      <>
        <p>
          These Terms & Conditions govern use of the NGPS Multitech Private Limited website. By
          accessing or using the website, you agree to these terms. If you do not agree, please do
          not use the website.
        </p>
        <p>
          The website provides general information about our electronics industry services,
          including EMS, Return Management, Bulk Packaging, OEM Solutions, and value-added
          services.
        </p>
      </>
    ),
  },
  {
    title: 'Enquiries, quotations, and service scope',
    body: (
      <>
        <p>
          A form submission, discussion, estimate, or quotation request does not by itself create
          a binding service agreement. Availability, scope, pricing, timelines, quality criteria,
          responsibilities, and commercial terms must be confirmed in writing.
        </p>
        <p>
          Services are planned around client requirements. Any signed proposal, purchase order,
          statement of work, or service agreement accepted by NGPS will take priority for that
          project if it conflicts with these website terms.
        </p>
      </>
    ),
  },
  {
    title: 'Information you submit',
    body: (
      <>
        <p>
          You agree to provide accurate, current, and lawful information when contacting us or
          requesting a quote. You must have authority to share any company, product, technical, or
          personal information included in a submission.
        </p>
        <p>
          Please do not submit confidential designs, credentials, payment-card information, or
          highly sensitive material unless an appropriate written arrangement and secure method
          have first been agreed.
        </p>
      </>
    ),
  },
  {
    title: 'Acceptable use',
    body: (
      <>
        <p>You must not use the website to:</p>
        <ul>
          <li>Break applicable law, infringe rights, or send deceptive or harmful material.</li>
          <li>Attempt unauthorised access, probe security, or interfere with website operation.</li>
          <li>Introduce malicious code, automate abusive requests, or misuse Contact and Quote forms.</li>
          <li>Copy, scrape, or republish website content for misleading commercial purposes.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Intellectual property',
    body: (
      <>
        <p>
          The NGPS name, logos, website design, original text, graphics, and other website content
          are owned by or used with permission by NGPS. You may view and retain reasonable copies
          for evaluating our services, but no other licence is granted.
        </p>
        <p>
          Third-party names, marks, maps, icons, and services remain the property of their
          respective owners.
        </p>
      </>
    ),
  },
  {
    title: 'Website availability and external services',
    body: (
      <>
        <p>
          We aim to keep website information useful and current, but content may contain errors or
          become outdated. We may update, suspend, or remove website features without notice.
        </p>
        <p>
          Maps, email delivery, hosting, and external links are provided by third parties. NGPS
          does not control their availability, security, content, or separate terms.
        </p>
      </>
    ),
  },
  {
    title: 'Disclaimers and responsibility',
    body: (
      <>
        <p>
          Website content is general information and is not a technical specification, guaranteed
          service commitment, legal advice, or substitute for a written project assessment.
        </p>
        <p>
          To the extent permitted by applicable law, NGPS is not responsible for indirect or
          consequential loss arising only from reliance on general website content, inability to
          access the website, or third-party services. Nothing in these terms excludes
          responsibility that cannot lawfully be excluded.
        </p>
      </>
    ),
  },
  {
    title: 'Changes, governing law, and contact',
    body: (
      <>
        <p>
          We may update these terms by posting a revised version on this page. Continued website
          use after an update means the revised terms apply from their stated date.
        </p>
        <p>
          These website terms are governed by the laws of India. Subject to any binding written
          agreement, disputes relating to website use will be subject to the competent courts in
          New Delhi.
        </p>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-orange-50 via-white to-blue-50 px-6 py-12 md:py-16">
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">Legal</span>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Terms & <span className="text-blue-600">Conditions</span>
          </h1>
          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            The terms that apply when you browse this website, submit an enquiry, or request a quote.
          </p>
          <p className="mt-4 text-sm font-medium text-slate-500">Last updated: 28 July 2026</p>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { Icon: File, label: 'Clear website terms' },
              { Icon: CheckCircle, label: 'Written project scope' },
              { Icon: Shield, label: 'Responsible website use' },
            ].map(({ Icon, label }) => (
              <div key={label} className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5 shadow-sm">
                <Icon size="24px" className="text-orange-500" />
                <p className="mt-3 text-sm font-semibold text-slate-800">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/60 p-5 text-sm leading-6 text-slate-700">
            These are general website terms. Project-specific scope and commercial conditions must
            be agreed separately in writing.
          </div>

          <div className="mt-8 space-y-5">
            {terms.map((term, index) => (
              <article key={term.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-sm font-bold text-orange-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{term.title}</h2>
                    <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
                      {term.body}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Envelope size="24px" className="text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900">Questions about these terms?</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Contact NGPS Multitech Private Limited at{' '}
              <a className="font-semibold text-blue-600 hover:text-orange-500" href="mailto:ngpsmultitech@gmail.com">
                ngpsmultitech@gmail.com
              </a>{' '}
              or Unit No. 14, Bamnoli Village, Dwarka Sector 28, New Delhi – 110077.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
