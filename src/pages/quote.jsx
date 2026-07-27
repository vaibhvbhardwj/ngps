import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { CheckCircle, Envelope, Phone } from '@boxicons/react';
import quoteHero from '../assets/contact_bg.jpeg';

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: 'Bulk Packaging',
  product: '',
  quantity: '',
  timeline: '',
  location: '',
  message: '',
};

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10';

export default function Quote() {
  const [formData, setFormData] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    const quoteSummary = [
      `Company: ${formData.company}`,
      `Service: ${formData.service}`,
      `Product: ${formData.product || 'Not specified'}`,
      `Estimated quantity: ${formData.quantity || 'Not specified'}`,
      `Required timeline: ${formData.timeline || 'Not specified'}`,
      `Pickup / delivery location: ${formData.location || 'Not specified'}`,
      '',
      'Additional requirements:',
      formData.message || 'None provided',
    ].join('\n');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      subject: `Quote Request — ${formData.service}`,
      message: quoteSummary,
      company_name: formData.company,
      service: formData.service,
      product_category: formData.product,
      estimated_quantity: formData.quantity,
      required_timeline: formData.timeline,
      project_location: formData.location,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setFormData(initialForm);
      setStatus({
        type: 'success',
        message: 'Your quote request has been sent. Our team will contact you within one business day.',
      });
    } catch (error) {
      console.error('EmailJS quote request error:', error);
      setStatus({
        type: 'error',
        message: 'We could not send your request. Please try again or contact our team directly.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-slate-100 bg-white px-4 py-12 sm:px-6 md:py-16">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden md:block">
          <img
            src={quoteHero}
            alt=""
            aria-hidden="true"
            className="h-full w-full scale-x-[-1] object-cover object-center"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/15" />
        </div>
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto max-w-7xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Start a Project
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Request a <span className="text-blue-600">Custom Quote</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Share your operational requirements and our team will prepare a solution for packaging,
            return management, EMS, ESD, or other value-added support.
          </p>
        </motion.div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.aside
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-4"
          >
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/50 to-orange-50/60 p-6 text-slate-900 shadow-lg sm:p-8 lg:sticky lg:top-28">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                What happens next
              </span>
              <h2 className="mt-3 text-2xl font-bold">A clear response, not a generic estimate.</h2>

              <div className="mt-7 space-y-5">
                {[
                  'We review your service, volume, and timeline.',
                  'Our operations team confirms any missing details.',
                  'You receive a tailored scope and commercial quote.',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle className="mt-0.5 shrink-0 text-orange-500" size="22px" />
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-blue-100 pt-6">
                <p className="text-sm text-slate-500">Need immediate assistance?</p>
                <a
                  href="tel:+919818867565"
                  className="mt-4 flex items-center gap-3 text-sm font-semibold text-blue-600 transition hover:text-orange-500"
                >
                  <Phone size="20px" />
                  +91 9818867565
                </a>
                <a
                  href="mailto:info@ngpsmultitech.com"
                  className="mt-4 flex items-center gap-3 break-all text-sm font-semibold text-blue-600 transition hover:text-orange-500"
                >
                  <Envelope size="20px" />
                  info@ngpsmultitech.com
                </a>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-8"
          >
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-950">Project requirements</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fields marked with an asterisk are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Full name *
                    <input
                      required
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${inputClass} mt-2`}
                      placeholder="Your full name"
                    />
                  </label>

                  <label className="text-sm font-semibold text-slate-700">
                    Company name *
                    <input
                      required
                      type="text"
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      className={`${inputClass} mt-2`}
                      placeholder="Company or brand"
                    />
                  </label>

                  <label className="text-sm font-semibold text-slate-700">
                    Work email *
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputClass} mt-2`}
                      placeholder="name@company.com"
                    />
                  </label>

                  <label className="text-sm font-semibold text-slate-700">
                    Phone number *
                    <input
                      required
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${inputClass} mt-2`}
                      placeholder="+91 00000 00000"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Required service *
                    <select
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClass} mt-2`}
                    >
                      <option>Bulk Packaging</option>
                      <option>Returns Management</option>
                      <option>EMS Services</option>
                      <option>ESD Solutions</option>
                      <option>Multiple Services</option>
                    </select>
                  </label>

                  <label className="text-sm font-semibold text-slate-700">
                    Product category
                    <input
                      type="text"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className={`${inputClass} mt-2`}
                      placeholder="e.g. consumer electronics"
                    />
                  </label>

                  <label className="text-sm font-semibold text-slate-700">
                    Estimated quantity / volume
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className={`${inputClass} mt-2`}
                      placeholder="e.g. 10,000 units/month"
                    />
                  </label>

                  <label className="text-sm font-semibold text-slate-700">
                    Required timeline
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className={`${inputClass} mt-2`}
                      placeholder="e.g. within 4 weeks"
                    />
                  </label>
                </div>

                <label className="block text-sm font-semibold text-slate-700">
                  Pickup / delivery location
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`${inputClass} mt-2`}
                    placeholder="City, state, or service region"
                  />
                </label>

                <label className="block text-sm font-semibold text-slate-700">
                  Additional requirements
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} mt-2 resize-y`}
                    placeholder="Tell us about product specifications, packaging standards, quality checks, or logistics requirements."
                  />
                </label>

                {status.message && (
                  <div
                    role="status"
                    className={`rounded-xl border px-4 py-3 text-sm ${
                      status.type === 'success'
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                        : 'border-red-200 bg-red-50 text-red-700'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
                >
                  {isSending ? 'Sending request…' : 'Request My Quote'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
