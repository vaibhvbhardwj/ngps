import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import CTABanner from "../components/home/cta"; 
import { Phone, Envelope, MapIcon } from '@boxicons/react';
import hero_bg from '../assets/contact_bg.jpeg';


export default function Contact() {
  // Form State Management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submission via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

    emailjs
      .send(
        'service_7o8sybf',
        'template_z2899cy',
        templateParams,
        '_dHqvekCWVUt33qjB'
      )
      .then(
        () => {
          setSuccessMessage('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
          setIsSending(false);
        },
        (error) => {
          console.error(error);
          setIsSending(false);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative text-white py-24 px-6 overflow-hidden">
  {/* 1. Main Background Image Container */}
  <div className="absolute inset-0 z-0">
    <img 
      src={hero_bg} // Replace with your imported image variable (e.g., hero_bg, BG, etc.)
      alt="Background Texture"
      className="w-full h-full object-cover object-center"
    />
  </div>

  {/* 2. Dark Overlay Layer for Text Readability */}
  <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px] z-0" />

  {/* 3. Main Content Wrapper */}
  <div className="max-w-7xl mx-auto relative z-10 text-left">
    <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm block mb-3">
      Connect With Us
    </span>
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-4xl">
      Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Reliable Together</span>
    </h1>
    <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
      Have questions about our operational capabilities, pricing structures, or scaling pipelines across India? Reach out to our team today.
    </p>
  </div>
</section>


      {/* 2. Contact Cards Section */}
      <section className="py-12 bg-slate-50 px-6 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Call */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex items-start gap-4 hover:border-blue-500 transition-colors">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600 text-2xl">
              <Phone/>
            </div>
            <div>
              <h4 className="font-semibold text-slate-950 mb-1">Call Our Team</h4>
              <p className="text-slate-600 text-sm mb-2">Mon-Sat from 9am to 6pm.</p>
              <a href="tel:+919818867565" className="text-blue-600 font-medium text-sm hover:underline">+91 9818867565</a>
            </div>
          </div>

          {/* Card 2 - Email */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex items-start gap-4 hover:border-blue-500 transition-colors">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600 text-2xl">
              <Envelope/>
            </div>
            <div>
              <h4 className="font-semibold text-slate-950 mb-1">Email Support</h4>
              <p className="text-slate-600 text-sm mb-2">We reply within 24 operational hours.</p>
              <a href="mailto:info@ngpsmultitech.com" className="text-blue-600 font-medium text-sm hover:underline">info@ngpsmultitech.com</a>
            </div>
          </div>

          {/* Card 3 - Corporate Base */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex items-start gap-4 hover:border-blue-500 transition-colors sm:col-span-2 lg:col-span-1">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600 text-2xl">
              <MapIcon/>
            </div>
            <div>
              <h4 className="font-semibold text-slate-950 mb-1">Corporate HQ</h4>
              <p className="text-slate-600 text-sm mb-2">Dwarka, New Delhi, India</p>
              <a href="#map" className="text-blue-600 font-medium text-sm hover:underline">Find on Map &darr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Form & Office Information Split Grid */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form Component (7 Cols) */}
          <div className="md:col-span-7 bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-950 mb-2">Send Us a Message</h3>
            <p className="text-slate-600 text-sm mb-6">Fill out the quick secure blueprint below, and our operations agent will touch base shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">Full Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 text-sm focus:outline-none focus:border-blue-600" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">Email Address *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 text-sm focus:outline-none focus:border-blue-600" placeholder="name@company.com" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 text-sm focus:outline-none focus:border-blue-600" placeholder="+91 0000000000" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">Inquiry Purpose</label>
                  <select name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 text-sm focus:outline-none focus:border-blue-600">
                    <option value="Bulk Packaging">Bulk Packaging Solutions</option>
                    <option value="Returns Management">Returns & Reverse Logistics</option>
                    <option value="EMS Services">EMS / OEM Assembly Pipeline</option>
                    <option value="General Inquiry">General Partnership Queries</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">Detailed Message *</label>
                <textarea required rows="4" name="message" value={formData.message} onChange={handleChange} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 text-sm focus:outline-none focus:border-blue-600" placeholder="Outline operational requirements here..."></textarea>
              </div>

              <button type="submit" disabled={isSending} className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-400 text-white font-medium py-3 rounded-lg transition-colors text-sm shadow-sm flex items-center justify-center gap-2">
                {isSending ? 'Transmitting...' : 'Send Operational Request'}
              </button>

              {successMessage && (
                <p className="mt-3 text-center text-sm font-medium text-emerald-600 bg-emerald-50 py-2 rounded-lg border border-emerald-200">
                  {successMessage}
                </p>
              )}
            </form>
          </div>

          {/* Office Information Component (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-2xl font-bold text-slate-950">Plant Operations</h3>
              <p className="text-slate-600 text-sm mt-1">NGPS Multitech Pvt. Ltd.</p>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-0.5"><i className="bx bx-map-pin"></i></span>
                <p className="leading-relaxed">
                  <strong>Full Postal Address:</strong><br />
                  CN-14, Bamnoli Village, Sector 28 Dwarka,<br />
                  Dwarka, New Delhi, Delhi, 110077
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-0.5"><i className="bx bx-time-five"></i></span>
                <p>
                  <strong>Work Shift Schedules:</strong><br />
                  Monday – Saturday: 09:00 AM – 06:00 PM<br />
                  Sundays: Plant Closed
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-0.5"><i className="bx bx-check-shield"></i></span>
                <p>
                  <strong>Compliance Assurance:</strong><br />
                  Fully certified facility for bulk diagnostics, secondary fulfillment operations, and environmentally safe electronics asset recovery.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Google Map Component */}
      <section id="map" className="w-full h-[400px] bg-slate-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8688277232213!2d77.03128237549751!3d28.54366217571346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a420ec1a99b%3A0x32cc86fd251a4fce!2sCN-14%2C%20Bamnoli%20Village%2C%20Sector%2028%20Dwarka%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi%2C%20110077!5e0!3m2!1sen!2sin!4v1784226104947!5m2!1sen!2sin" 
          className="w-full h-full border-0" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
          title="NGPS Multitech Plant Office Location Map"
        ></iframe>
      </section>

      {/* 5. FAQs Component */}
      <section className="py-20 bg-slate-50 text-slate-900 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">Contact Coordination FAQs</h2>
            <p className="text-slate-600 mt-2 text-sm">Everything you need to know about processing service alignments with us.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-semibold text-base mb-2 text-blue-600">How fast can I get a custom onboarding quote?</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Once we receive your technical payload parameters through the form above, our logistics analytics crew estimates pricing points and routes back to you with a comprehensive quote outline in less than one working day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-semibold text-base mb-2 text-blue-600">Can we schedule a live on-site visit to the New Delhi plant facility?</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Absolutely. We value structural transparency. Please connect ahead of schedule through our corporate lines to set an inspection date with operations personnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Component */}
      <CTABanner />
    </>
  );
}