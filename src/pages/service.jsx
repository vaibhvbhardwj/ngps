import ProcessSection from "../components/home/process";
import CTABanner from "../components/home/cta";
import Service1 from "../assets/service1.jpg";
import Service2 from "../assets/service2.jpg";
import BG from "../assets/service_bg.jpg";

import { Box, RefreshCcw, Cog, Shield } from '@boxicons/react';
import { Link } from 'react-router-dom';

export default function Service() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 py-16 md:py-20">
        {/* Background Image with Dark & Tech Overlay */}
        {/* 1. Main Background Image Container */}
<div className="absolute inset-0 z-0">
  <img 
    src={BG} 
    alt="Background Texture"
    className="w-full h-full object-cover object-center"
    decoding="async"
  />
</div>

{/* 2. Linear Gradient Overlay Layer */}
<div className="absolute inset-0 z-10 bg-white/90 pointer-events-none" />

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm block mb-3">Our Core Expertise</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-tight">
              End-to-End Operational <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Support & Services</span>
            </h1>
            <p className="text-slate-500 text-lg mb-8 max-w-xl">
              From bulk packaging and structured return management to EMS, ESD, and customized value-added services for electronics businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">Request a Quote</Link>
              <a href="#overview" className="border border-slate-700 hover:bg-slate-200 text-black font-medium px-6 py-3 rounded-lg transition-colors">View Details</a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section id="overview" className="scroll-mt-24 bg-slate-50 px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Solutions for Your Business</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Discover how NGPS Multitech helps brands streamline logistics, reverse inventory, and electronics manufacturing operations.</p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  {/* Card 1 */}
  <div className="group rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
      <Box />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
      Bulk Packaging
    </h3>
    <p className="mb-4 text-sm text-slate-600">
      Structured packaging protocols featuring unit verification, shrink wrapping, and clean master carton setups.
    </p>
    <a href="#packaging" className="flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors group-hover:text-orange-500">
      Learn More &rarr;
    </a>
  </div>

  {/* Card 2 */}
  <div className="group rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
      < RefreshCcw />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
      Returns Management
    </h3>
    <p className="mb-4 text-sm text-slate-600">
      Strategic inspection, item refurbishment, resale positioning, and eco-friendly authorized disposal paths.
    </p>
    <a href="#returns" className="flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors group-hover:text-orange-500">
      Learn More &rarr;
    </a>
  </div>

  {/* Card 3 */}
  <div className="group rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
      <Cog />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
      EMS Services
    </h3>
    <p className="mb-4 text-sm text-slate-600">
      Flexible, quality-focused electronics operations shaped around product specifications, production volumes, and client requirements.
    </p>
    <a href="#ems" className="flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors group-hover:text-orange-500">
      Learn More &rarr;
    </a>
  </div>

  {/* Card 4 */}
  <div className="group rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
      <Shield />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
      ESD Solutions
    </h3>
    <p className="mb-4 text-sm text-slate-600">
      Product-sensitive handling support shaped around electronics, process, and quality requirements.
    </p>
    <a href="#esd" className="flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors group-hover:text-orange-500">
      Learn More &rarr;
    </a>
  </div>
</div>
      </section>

      {/* Packaging Section */}
      <section id="packaging" className="scroll-mt-24 border-b border-slate-100 bg-white px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex bg-blue-50 text-blue-600 font-semibold text-xs uppercase px-3 py-1 rounded-full">Service Focus 01</div>
            <h2 className="text-3xl font-bold text-slate-900">High-Capacity Bulk Packaging Solutions</h2>
            <p className="text-slate-600">
              Support high-volume electronics requirements with careful handling, organized processes, and packaging prepared according to your specifications.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center gap-2"><span className="text-orange-500 font-bold">✓</span> Precision Unit Verification protocols</li>
              <li className="flex items-center gap-2"><span className="text-orange-500 font-bold">✓</span> Semi-automated heavy duty Shrink Wrapping</li>
              <li className="flex items-center gap-2"><span className="text-orange-500 font-bold">✓</span> Master carton packing prepared to defined client requirements</li>
            </ul>
          </div>
          {/* Visual Side */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img src={Service1} alt="Shrink Wrap Packing Line" loading="lazy" decoding="async" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 left-4 bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded backdrop-blur">Inside Our Packaging Unit</div>
          </div>
        </div>
      </section>

      {/* Return Section */}
      <section id="returns" className="scroll-mt-24 border-b border-slate-100 bg-slate-50 px-6 py-12 md:py-16">
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
      <section id="ems" className="scroll-mt-24 bg-white px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Side first for alternating rhythm */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-200 order-2 md:order-1">
            <img src={Service2} alt="Assembly Team Line" loading="lazy" decoding="async" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 left-4 bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded backdrop-blur">Component Assembly Floor</div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-flex bg-blue-50 text-blue-600 font-semibold text-xs uppercase px-3 py-1 rounded-full">Service Focus 03</div>
            <h2 className="text-3xl font-bold text-slate-900">Electronics Manufacturing Services (EMS)</h2>
            <p className="text-slate-600">
              Support evolving electronics operations with structured processes, skilled execution, and careful product handling. Our solutions adapt to your specifications, quality expectations, and production volumes.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border-l-4 border-orange-500 pl-3">
                <h5 className="font-semibold text-slate-950 text-sm">Structured Execution</h5>
                <p className="text-xs text-slate-50 mt-1 text-slate-500">Consistent processes aligned with product specifications.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-3">
                <h5 className="font-semibold text-slate-950 text-sm">Flexible Capacity</h5>
                <p className="text-xs text-slate-50 mt-1 text-slate-500">Scalable support for changing operational volumes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESD Section */}
      <section id="esd" className="scroll-mt-24 border-y border-slate-100 bg-slate-50 px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase text-orange-600">
              Service Focus 04
            </div>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              ESD Solutions for Electronics Operations
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Electrostatic-sensitive products require handling processes suited to the product,
              operating environment, and quality expectations. NGPS discusses the required scope
              with each client and structures practical ESD support around their defined workflow.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            {[
              'Requirement-based planning',
              'Careful electronics handling',
              'Process and quality alignment',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Shield size="21px" />
                </span>
                <span className="text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* FAQ Section */}
      <section className="bg-white px-6 py-12 text-slate-900 md:py-16">
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
          Our operations are based in Bamnoli, Dwarka, New Delhi, where we provide electronics services according to defined client requirements.
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
          Bulk packaging workflows can include unit verification, gift-box packing, shrink wrapping, master-carton packing, and barcode or SKU labelling. The exact process is defined according to the product, quantity, sensitivity, and client specifications.
        </p>
      </div>

      {/* FAQ Item 4 */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-semibold text-base mb-2 flex justify-between items-center text-blue-600">
          What is included under your end-to-end EMS Services?
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Our Electronics Manufacturing Services focus on structured processes, skilled execution, careful product handling, and quality-focused support tailored to product specifications and operational volumes.
        </p>
      </div>

      {/* FAQ Item 5 */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-semibold text-base mb-2 flex justify-between items-center text-blue-600">
          How do you handle unrepairable items in your Returns Management program?
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Returned products can undergo inspection, functional testing, segregation, condition assessment, grading, refurbishment-related processes, and repackaging. The appropriate next step is determined according to the product condition and the client's defined workflow.
        </p>
      </div>

      {/* FAQ Item 6 */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-semibold text-base mb-2 flex justify-between items-center text-blue-600">
          Can NGPS combine multiple services into one workflow?
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Yes. Depending on the requirement, services such as Return Management, inspection, repackaging, Bulk Packaging, EMS, ESD Solutions, and other value-added activities can be structured as a coordinated workflow.
        </p>
      </div>

      {/* FAQ Item 7 */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-semibold text-base mb-2 flex justify-between items-center text-blue-600">
          What products can be supported through Bulk Packaging?
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          NGPS supports bulk packaging requirements for electronic products, components, and accessories. Packaging methods are planned around product size, sensitivity, quantity, intended use, and the client's handling specifications.
        </p>
      </div>

      {/* FAQ Item 8 */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-semibold text-base mb-2 flex justify-between items-center text-blue-600">
          Do you provide ESD Solutions for sensitive electronics?
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Yes. ESD Solutions are part of our electronics service capabilities. The recommended scope is discussed according to the product, handling environment, process requirements, and the client's quality expectations.
        </p>
      </div>

      {/* FAQ Item 9 */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-semibold text-base mb-2 flex justify-between items-center text-blue-600">
          Can the service scale when our operational volumes change?
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Our solutions are designed to be flexible and scalable. We review expected volumes, process steps, quality requirements, and timelines with each client so the workflow can support ongoing or evolving business needs.
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
