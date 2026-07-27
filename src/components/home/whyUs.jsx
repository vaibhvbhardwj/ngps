import { motion } from 'framer-motion';
// Import the React components directly from the V2 bundle package
import { Layers, Globe, Shield } from '@boxicons/react';
import shortLogo from '../../assets/logo_short.png';

const pillars = [
  {
    title: "Scalable Operations",
    desc: "Built to support high-volume production, seasonal demand spikes, and enterprise-level fulfillment without compromising turnaround time.",
    IconComponent: Layers,
  },
  {
    title: "Flexible Solutions",
    desc: "Services are shaped around each client's product, volume, quality, and operational requirements rather than a one-size-fits-all approach.",
    IconComponent: Globe,
  },
  {
    title: "Quality You Can Trust",
    desc: "Every unit passes through structured verification and quality checkpoints to minimize errors and protect your brand reputation.",
    IconComponent: Shield,
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      {/* Decorative Background */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[var(--accent-bg)] blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[rgba(241,90,36,.08)] blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        <div className="lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(220px,1fr)] lg:items-center lg:gap-12">
          {/* Heading Container */}
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="block text-sm font-semibold tracking-wide text-[var(--brand-orange)]">
              WHY NGPS MULTITECH
            </span>


            <h2 className="mt-6 text-4xl font-bold leading-tight text-black md:text-5xl">
              Support That Builds
              <span className="text-[var(--brand-orange)]"> Trust.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text)]">
              At NGPS Multitech Private Limited, we believe that strong business partnerships are built through consistent quality, reliable execution, and responsive support. Our solutions are designed around the actual operational requirements of our clients rather than a one-size-fits-all approach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden items-center justify-center lg:flex"
          >
            <img
              src={shortLogo}
              alt="NGPS"
              loading="lazy"
              decoding="async"
              className="h-auto w-full max-w-[245px] object-contain"
            />
          </motion.div>
        </div>

        {/* Staggered Cards Container */}
        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
          {pillars.map((item, index) => {
            const Icon = item.IconComponent;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[var(--brand-blue)] hover:shadow-2xl"
              >
                {/* Accent Top Bar */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)]"></div>

                {/* Animated Icon Wrapper Container */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent-bg)] text-[var(--brand-blue)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                  {/* Render the Component directly with styling properties */}
                  <Icon size="32px" color="currentColor" />
                </div>

                <h3 className="mt-8 text-xl font-bold text-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--text)]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
