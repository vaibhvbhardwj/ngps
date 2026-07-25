'use client';

import { motion } from 'framer-motion';
import {
    Shield,
    Leaf
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Certifications() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">

      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[var(--accent-bg)] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[rgba(241,90,36,.08)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
                    <img
                      src={certificateData[0].image}
                      alt="ISO Quality Certificate"
                      className="h-full w-full object-cover"
                    />
                  </div>
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
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
                    <img
                      src={certificateData[1].image}
                      alt="ISO Environment Certificate"
                      className="h-full w-full object-cover"
                    />
                  </div>
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
    </section>
  );
}
