'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Shield,
    Leaf,
    X
}  from '@boxicons/react'; 

import QMSCert from '../../assets/qms_cert.png';
import EMSCert from '../../assets/ems_cert.png';

const certificateData = [
  {
    image: QMSCert,
    Icon: Shield, // Capitalized 'Icon' so React recognizes it as a component reference
    badge: 'Operational Standard',
    title: 'ISO Quality Management',
    description:
      'ISO 9001 certification confirms our dedication to rigorous quality control, process efficiency, and operational excellence across every project we execute.',
    tilt: -18,
  },
  {
    image: EMSCert,
    Icon: Leaf, // Capitalized 'Icon' so React recognizes it as a component reference
    badge: 'Environment Standard',
    title: 'ISO Environment Management',
    description:
      'ISO 14001 certification demonstrates our commitment to environmentally responsible operations, sustainable practices, and continual improvement.',
    tilt: 18,
  },
];

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (!selectedCertificate) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedCertificate]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-12 md:py-16">

      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[var(--accent-bg)] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[rgba(241,90,36,.08)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="w-full text-left mb-16"
        >
          <span className="block text-sm font-semibold uppercase tracking-wider text-[var(--brand-orange)]">
            Certifications
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-black md:text-5xl tracking-tight max-w-4xl">
            Built on Certified <span className="text-[var(--brand-orange)]">Quality</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text)] max-w-3xl">
            Every service we provide is backed by internationally recognised
            standards, ensuring quality, operational efficiency and
            environmental responsibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* FIRST CERTIFICATE */}
          {(() => {
            const CertIcon = certificateData[0].Icon;
            return (
              <div className="flex flex-col items-center gap-6 rounded-[30px] border border-slate-200 bg-white p-6 shadow-xl lg:p-10">
                {/* Certificate Image */}
                <div className="w-full max-w-[270px]">
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificateData[0])}
                    className="block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                    aria-label="Open ISO Quality Management certificate"
                  >
                    <img
                      src={certificateData[0].image}
                      alt="ISO Quality Certificate"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </button>
                </div>

                {/* Text Content */}
                <div className="w-full flex-1">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent-bg)] text-[var(--brand-blue)]">
                    <CertIcon size="36px" color="currentColor" />
                  </div>

                  <span className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-orange)]">
                    {certificateData[0].badge}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-black lg:text-3xl">
                    {certificateData[0].title}
                  </h3>

                  <p className="mt-4 leading-7 text-[var(--text)]">
                    {certificateData[0].description}
                  </p>

                  <div className="mt-6 flex items-center gap-3 font-semibold text-[var(--brand-blue)] cursor-pointer">
                    Learn More
                    <i className="bx bx-right-arrow-alt text-2xl"></i>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* SECOND CERTIFICATE */}
          {(() => {
            const CertIcon = certificateData[1].Icon;
            return (
              <div className="flex flex-col items-center gap-6 rounded-[30px] border border-slate-200 bg-white p-6 shadow-xl lg:p-10">
                {/* Certificate Image */}
                <div className="w-full max-w-[270px]">
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificateData[1])}
                    className="block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                    aria-label="Open ISO Environment Management certificate"
                  >
                    <img
                      src={certificateData[1].image}
                      alt="ISO Environment Certificate"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </button>
                </div>

                {/* Text Content */}
                <div className="w-full flex-1">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent-bg)] text-[var(--brand-blue)]">
                    <CertIcon size="36px" color="currentColor" /> 
                  </div>

                  <span className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-orange)]">
                    {certificateData[1].badge}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-black lg:text-3xl">
                    {certificateData[1].title}
                  </h3>

                  <p className="mt-4 leading-7 text-[var(--text)]">
                    {certificateData[1].description}
                  </p>

                  <div className="mt-6 flex items-center gap-3 font-semibold text-[var(--brand-blue)] cursor-pointer">
                    Learn More
                    <i className="bx bx-right-arrow-alt text-2xl"></i>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertificate.title} certificate preview`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCertificate(null);
            }
          }}
        >
          <div className="relative flex max-h-full max-w-4xl items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl sm:p-5">
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-2 top-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:scale-105 hover:border-orange-300 hover:text-orange-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 sm:-right-5 sm:-top-5"
              aria-label="Close certificate preview"
            >
              <X size="26px" />
            </button>

            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} certificate`}
              className="max-h-[calc(100vh-4rem)] max-w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
