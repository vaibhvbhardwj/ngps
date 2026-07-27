import { motion } from 'framer-motion';
import { 
  Package, 
  Shield, 
  Gift, 
  Cube, 
  Box, 
  BuyMeACoffee, 
  CheckCircle, 
  Send,
  ChevronRight,
  ChevronLeft,
  ChevronDown
} from '@boxicons/react';

const processData = [
  { number: "1", title: "Receive Finished Units", desc: "Products are securely received from manufacturing partners.", Icon: Package },
  { number: "2", title: "Unit Verification", desc: "Each unit undergoes inspection and quality verification.", Icon: Shield },
  { number: "3", title: "Gift Box Packing", desc: "Products are professionally packed according to brand guidelines.", Icon: Gift },
  { number: "4", title: "Shrink Wrapping", desc: "Protective wrapping ensures safe transportation.", Icon: Cube },
  { number: "5", title: "Master Carton Packing", desc: "Packed products are organized into master cartons.", Icon: Box },
  { number: "6", title: "Labelling", desc: "Barcode and shipment labels are applied accurately.", Icon: BuyMeACoffee },
  { number: "7", title: "Final Quality Check", desc: "Final inspection before dispatch to maintain zero-defect delivery.", Icon: CheckCircle },
  { number: "8", title: "Dispatch Ready", desc: "Completed orders are organized and prepared according to client requirements.", Icon: Send },
];

// FIXED: Moved outside of the parent component to resolve ESLint error
const RenderCard = ({ step }) => {
  const Icon = step.Icon;
  return (
    <div className="group/process-card relative flex min-h-[110px] w-full items-center">
      {/* Large Overlapping Index Number */}
      <div className="absolute left-[-20px] z-0 select-none text-6xl font-black tracking-tighter text-slate-300/70 transition-opacity duration-300 group-hover/process-card:opacity-0 sm:text-7xl">
        {step.number}
      </div>
      {/* Transparent by default; the surface appears on hover and covers the number. */}
      <div className="group relative z-10 w-full rounded-2xl border border-transparent bg-transparent p-5 shadow-none transition-all duration-300 group-hover/process-card:-translate-y-1 group-hover/process-card:border-[var(--brand-blue)] group-hover/process-card:bg-white group-hover/process-card:shadow-xl">
        <div className="absolute left-4 top-0 h-[3px] w-12 rounded-b bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)]"></div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--brand-blue)] transition group-hover:bg-[var(--brand-blue)] group-hover:text-white">
            <Icon size="20px" color="currentColor" />
          </div>
          <h3 className="text-sm font-bold leading-tight text-black tracking-tight group-hover:text-[var(--brand-blue)] transition-colors">
            {step.title}
          </h3>
        </div>
        <p className="mt-3 text-[12px] leading-relaxed text-slate-500 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {step.desc}
        </p>
      </div>
    </div>
  );
};

export default function ProcessSection() {
  // Desktop Layout Configurations
  const pcTopRow = processData.slice(0, 4); 
  const pcBottomRow = [processData[7], processData[6], processData[5], processData[4]]; 

  // Mobile Inverted-S Snake Configurations
  const mobileRow1 = [processData[0], processData[1]]; 
  const mobileRow2 = [processData[3], processData[2]]; 
  const mobileRow3 = [processData[4], processData[5]]; 
  const mobileRow4 = [processData[7], processData[6]]; 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 14 } }
  };

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[var(--accent-bg)] blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[rgba(241,90,36,.05)] blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Heading */}
        {/* Header Block Section */}
<motion.div 
  className="w-full text-left mb-16"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  <span className="block text-sm font-semibold uppercase tracking-wider text-[var(--brand-orange)]">
    Our Workflow
  </span>
  <h2 className="mt-4 text-4xl font-bold text-black md:text-5xl tracking-tight leading-tight max-w-4xl">
    From Arrival to <span className="text-[var(--brand-orange)]">Dispatch</span>
  </h2>
  <p className="mt-6 text-lg leading-8 text-[var(--text)] max-w-3xl">
    Every product passes through a carefully managed workflow, ensuring consistency, quality, and timely delivery for every customer.
  </p>
</motion.div>


        {/* ================= PC & TABLET VIEW CONTAINER (Inverted U Layout) ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
          className="hidden md:block"
        >
          {/* Top Row: 1 -> 2 -> 3 -> 4 */}
          <div className="grid grid-cols-4 gap-x-10 relative">
            {pcTopRow.map((step, idx) => (
              <motion.div key={step.number} variants={itemVariants} className="relative">
                <RenderCard step={step} />
                {idx !== 3 && (
                  <div className="absolute top-1/2 -right-7 -translate-y-1/2 z-20 text-[var(--brand-blue)]">
                    <ChevronRight size="28px" color="currentColor" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Connective Drop Bridge Arrow */}
          <div className="flex justify-end pr-28 py-6 text-[var(--brand-blue)]">
            <ChevronDown size="44px" color="currentColor" />
          </div>

          {/* Bottom Row: 8 <- 7 <- 6 <- 5 */}
          <div className="grid grid-cols-4 gap-x-10 relative">
            {pcBottomRow.map((step, idx) => (
              <motion.div key={step.number} variants={itemVariants} className="relative">
                <RenderCard step={step} />
                {idx !== 0 && (
                  <div className="absolute top-1/2 -left-7 -translate-y-1/2 z-20 text-[var(--brand-blue)]">
                    <ChevronLeft size="28px" color="currentColor" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= MOBILE VIEW CONTAINER (Inverted S Layout) ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
          className="block md:hidden space-y-12"
        >
          {/* Row 1: 1 -> 2 */}
          <div className="grid grid-cols-2 gap-x-6 relative">
            <motion.div variants={itemVariants} className="relative">
              <RenderCard step={mobileRow1[0]} />
              <div className="absolute top-1/2 -right-5 -translate-y-1/2 z-20 text-[var(--brand-blue)]">
                <ChevronRight size="22px" color="currentColor" />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <RenderCard step={mobileRow1[1]} />
              <div className="absolute bottom-[-32px] right-6 z-20 text-[var(--brand-orange)]">
                <ChevronDown size="24px" color="currentColor" />
              </div>
            </motion.div>
          </div>

          {/* Row 2: 4 <- 3 */}
          <div className="grid grid-cols-2 gap-x-6 relative pt-4">
            <motion.div variants={itemVariants} className="relative">
              <RenderCard step={mobileRow2[0]} />
              <div className="absolute bottom-[-32px] left-6 z-20 text-[var(--brand-blue)]">
                <ChevronDown size="24px" color="currentColor" />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <RenderCard step={mobileRow2[1]} />
              <div className="absolute top-1/2 -left-5 -translate-y-1/2 z-20 text-[var(--brand-orange)]">
                <ChevronLeft size="22px" color="currentColor" />
              </div>
            </motion.div>
          </div>

          {/* Row 3: 5 -> 6 */}
          <div className="grid grid-cols-2 gap-x-6 relative pt-4">
            <motion.div variants={itemVariants} className="relative">
              <RenderCard step={mobileRow3[0]} />
              <div className="absolute top-1/2 -right-5 -translate-y-1/2 z-20 text-[var(--brand-blue)]">
                <ChevronRight size="22px" color="currentColor" />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <RenderCard step={mobileRow3[1]} />
              <div className="absolute bottom-[-32px] right-6 z-20 text-[var(--brand-blue)]">
                <ChevronDown size="24px" color="currentColor" />
              </div>
            </motion.div>
          </div>

          {/* Row 4: 8 <- 7 */}
          <div className="grid grid-cols-2 gap-x-6 relative pt-4">
            <motion.div variants={itemVariants}>
              <RenderCard step={mobileRow4[0]} />
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <RenderCard step={mobileRow4[1]} />
              <div className="absolute top-1/2 -left-5 -translate-y-1/2 z-20 text-[var(--brand-blue)]">
                <ChevronLeft size="22px" color="currentColor" />
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
