import ProcessSection from "../components/home/process";
import CTABanner from "../components/home/cta";
import Service1 from "../assets/service1.jpg";
import Service2 from "../assets/service2.jpg";
import BG from "../assets/service_bg.jpg";

import { Box, RefreshCcw, Cog } from '@boxicons/react';

export default function Service() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden">
        {/* Background Image with Dark & Tech Overlay */}
        {/* 1. Main Background Image Container */}
<div className="absolute inset-0 z-0">
  <img 
    src={BG} 
    alt="Background Texture"
    className="w-full h-full object-cover object-center opacity-30" 
  />
</div>

{/* 2. Linear Gradient Overlay Layer */}
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm block mb-3">Our Core Expertise</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-tight">
              End-to-End Operational <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Support & Services</span>
            </h1>
            <p className="text-slate-500 text-lg mb-8 max-w-xl">
              From secure bulk packaging and smart returns management to complete EMS lifecycle assembly across India. We deliver the support that builds trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">Request a Quote</a>
              <a href="#overview" className="border border-slate-700 hover:bg-slate-200 text-black font-medium px-6 py-3 rounded-lg transition-colors">View Details</a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section id="overview" className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Solutions for Your Business</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Discover how NGPS Multitech helps brands streamline logistics, reverse inventory, and electronics manufacturing operations.</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
  {/* Card 1 */}
  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-blue-500 hover:bg-slate-900 transition-all duration-300 group">
    <div className="text-4xl mb-4 text-blue-600 group-hover:text-blue-400 group-hover:scale-110 transition-transform inline-block">
      <Box />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white mb-2 transition-colors">
      Bulk Packaging
    </h3>
    <p className="text-slate-600 text-sm mb-4 group-hover:text-slate-300 transition-colors">
      Structured packaging protocols featuring unit verification, shrink wrapping, and clean master carton setups.
    </p>
    <a href="#packaging" className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:text-orange-400 transition-colors">
      Learn More &rarr;
    </a>
  </div>

  {/* Card 2 */}
  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-blue-500 hover:bg-slate-900 transition-all duration-300 group">
    <div className="text-4xl mb-4 text-blue-600 group-hover:text-blue-400 group-hover:scale-110 transition-transform inline-block">
      < RefreshCcw />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white mb-2 transition-colors">
      Returns Management
    </h3>
    <p className="text-slate-600 text-sm mb-4 group-hover:text-slate-300 transition-colors">
      Strategic inspection, item refurbishment, resale positioning, and eco-friendly authorized disposal paths.
    </p>
    <a href="#returns" className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:text-orange-400 transition-colors">
      Learn More &rarr;
    </a>
  </div>

  {/* Card 3 */}
  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-blue-500 hover:bg-slate-900 transition-all duration-300 group">
    <div className="text-4xl mb-4 text-blue-600 group-hover:text-blue-400 group-hover:scale-110 transition-transform inline-block">
      <Cog />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white mb-2 transition-colors">
      EMS Services
    </h3>
    <p className="text-slate-600 text-sm mb-4 group-hover:text-slate-300 transition-colors">
      End-to-end global product sourcing, localized pricing strategy, and end-to-end shipment pipeline management.
    </p>
    <a href="#ems" className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:text-orange-400 transition-colors">
      Learn More &rarr;
    </a>
  </div>
</div>
      </section>

      {/* Packaging Section */}
      <section id="packaging" className="py-20 bg-white px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex bg-blue-50 text-blue-600 font-semibold text-xs uppercase px-3 py-1 rounded-full">Service Focus 01</div>
            <h2 className="text-3xl font-bold text-slate-900">High-Capacity Bulk Packaging Solutions</h2>
            <p className="text-slate-600">
              Protect your products and optimize shelf appeal before dispatch. Our dedicated plant handles complex consumer electronic setups, ensuring zero loss and total uniformity.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center gap-2"><span className="text-orange-500 font-bold">✓</span> Precision Unit Verification protocols</li>
              <li className="flex items-center gap-2"><span className="text-orange-500 font-bold">✓</span> Semi-automated heavy duty Shrink Wrapping</li>
              <li className="flex items-center gap-2"><span className="text-orange-500 font-bold">✓</span> Sturdy Master Carton Packing tailored for cross-country transit</li>
            </ul>
          </div>
          {/* Visual Side */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img src={Service1} alt="Shrink Wrap Packing Line" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 left-4 bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded backdrop-blur">Inside Our Packaging Unit</div>
          </div>
        </div>
      </section>

      {/* Return Section */}
      <section id="returns" className="py-20 bg-slate-50 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex bg-orange-50 text-orange-600 font-semibold text-xs uppercase px-3 py-1 rounded-full mb-3">Service Focus 02</div>
            <h2 className="text-3xl font-bold text-slate-900">Smart Reverse Logistics & Returns Management</h2>
            <p className="text-slate-600 mt-2 max-w-xl">Convert returns into revenue. We efficiently manage the lifecycle of post-purchase products with transparent operations.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center font-bold text-blue-600 mb-4">01</div>
              <h4 className="font-semibold text-slate-900 mb-1">Strict Inspection</h4>
              <p className="text-xs text-slate-600">Deep testing of componentry to diagnose hardware integrity instantly.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center font-bold text-blue-600 mb-4">02</div>
              <h4 className="font-semibold text-slate-900 mb-1">Refurbishment</h4>
              <p className="text-xs text-slate-600">Restoring devices back to functional, high-performing baseline conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center font-bold text-blue-600 mb-4">03</div>
              <h4 className="font-semibold text-slate-900 mb-1">Strategic Resale</h4>
              <p className="text-xs text-slate-600">Assisting in liquidating inventory through verified secondary channels.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center font-bold text-blue-600 mb-4">04</div>
              <h4 className="font-semibold text-slate-900 mb-1">Eco-Safe Disposal</h4>
              <p className="text-xs text-slate-600">100% compliant, green electronic recycling for total e-waste reduction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EMS Section */}
      <section id="ems" className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Side first for alternating rhythm */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-200 order-2 md:order-1">
            <img src={Service2} alt="Assembly Team Line" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 left-4 bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded backdrop-blur">Component Assembly Floor</div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-flex bg-blue-50 text-blue-600 font-semibold text-xs uppercase px-3 py-1 rounded-full">Service Focus 03</div>
            <h2 className="text-3xl font-bold text-slate-900">Electronics Manufacturing Services (EMS)</h2>
            <p className="text-slate-600">
              Scale your hardware footprints seamlessly across the Indian landscape. We manage sourcing headaches, customs coordination, and optimization strategies so you focus on scale.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border-l-4 border-orange-500 pl-3">
                <h5 class="font-semibold text-slate-950 text-sm">Global Sourcing</h5>
                <p className="text-xs text-slate-50 mt-1 text-slate-500">Raw materials & microchip procurement routes.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-3">
                <h5 class="font-semibold text-slate-950 text-sm">Shipment Pipeline</h5>
                <p className="text-xs text-slate-50 mt-1 text-slate-500">Realtime visibility tracking freight updates directly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* FAQ Section */}
      <section className="py-20 bg-white text-slate-900 px-6">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold tracking-tight text-slate-950">Frequently Asked Questions</h2>
      <p className="text-slate-600 mt-2 text-sm">Clear, quick insights regarding operations at NGPS Multitech.</p>
    </div>

    <div className="space-y-4">
      {/* FAQ Item 1 */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-semibold text-base mb-2 flex justify-between items-center text-blue-600">
          Where is your primary facility based?
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Our core operation house is located strategically in New Delhi, India. From here, we smoothly handle mass turnarounds and outbound dispatch setups across all major pin codes nationally.
        </p>
      </div>

      {/* FAQ Item 2 */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-semibold text-base mb-2 flex justify-between items-center text-blue-600">
          Can NGPS handle customized electronics testing parameters during returns inspection?
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Yes. Our operations team aligns with your company's specified baseline testing manuals. Every product going through the line is evaluated step-by-step to match your strict quality parameters.
        </p>
      </div>

      {/* FAQ Item 3 */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-semibold text-base mb-2 flex justify-between items-center text-blue-600">
          What custom workflows are available for Bulk Packaging services?
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Our bulk packaging includes a rigorous step-by-step timeline featuring precise unit verification, specialized gift box packing, automated shrink wrapping, secure master carton packing, and barcode/SKU labeling before it hits dispatch rows.
        </p>
      </div>

      {/* FAQ Item 4 */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-semibold text-base mb-2 flex justify-between items-center text-blue-600">
          What is included under your end-to-end EMS Services?
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Our Electronics Manufacturing Services (EMS) cover global component and product sourcing, optimized regional pricing strategies, and complete end-to-end shipment and logistics management to keep pipelines smooth.
        </p>
      </div>

      {/* FAQ Item 5 */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-semibold text-base mb-2 flex justify-between items-center text-blue-600">
          How do you handle unrepairable items in your Returns Management program?
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          If an electronic product cannot be successfully refurbished for resale channels, it enters our eco-friendly disposal chain. We ensure components are managed under strict, green environmental standards to cut down on corporate e-waste.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <CTABanner />
    </>
  );
}