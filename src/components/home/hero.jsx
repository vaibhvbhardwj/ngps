import React from 'react';
import hero_bg from '../../assets/ngps_hero_bg.png';
import {
  Package,
  RefreshCw,
  Chip,
  Building,
} from "@boxicons/react";

export default function Hero() {
  const services = [
    {
      title: "Bulk Packaging",
      subtitle: "Secure Packaging",
      icon: Package,
    },
    {
      title: "Returns Management",
      subtitle: "Reverse Logistics",
      icon: RefreshCw,
    },
    {
      title: "EMS Services",
      subtitle: "Assembly Solutions",
      icon: Chip,
    },
    {
      title: "OEM Services",
      subtitle: "Manufacturing",
      icon: Building,
    },
  ];

  return (
    <section className="relative overflow-x-hidden bg-white w-full">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Two-Column Layout Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 items-stretch min-h-[500px] lg:min-h-[620px]">
        
        {/* Left Side: Text & Content */}
        <div className="lg:col-span-6 flex flex-col justify-center pt-10 lg:pt-20 pb-10 lg:pb-16 lg:pr-8 z-20">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-black leading-[1.15] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            End-to-End
            <br />
            <span className="text-[var(--brand-blue,#1e40af)]">
              Manufacturing & 
            </span>
            <br />
            <span className="text-gray-800">Packaging</span>
            <br />
            <span className="text-[var(--brand-orange,#ea580c)]">
              Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
            Your trusted partner for electronics after-sales support,
            bulk packaging, returns management and OEM services across India.
            We help brands streamline manufacturing support,
            packaging and reverse logistics with reliability and precision.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="w-full sm:w-auto text-center rounded-xl bg-[var(--brand-orange,#ea580c)] px-8 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              Request Quote
            </button>
            <button className="w-full sm:w-auto text-center rounded-xl border-2 border-[var(--brand-blue,#1e40af)] bg-white px-8 py-3.5 font-semibold text-[var(--brand-blue,#1e40af)] transition-all duration-300 hover:bg-blue-50">
              Explore Services
            </button>
          </div>

          {/* Stats Block - Fixed Wrap and Gap for Mobile */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 flex flex-wrap items-center gap-6 sm:gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--brand-blue,#1e40af)] tracking-tight">
                PAN
              </h2>
              <p className="text-xs sm:text-sm font-medium text-gray-500 mt-0.5">
                India Operations
              </p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-gray-200"></div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--brand-blue,#1e40af)] tracking-tight">
                OEM
              </h2>
              <p className="text-xs sm:text-sm font-medium text-gray-500 mt-0.5">
                EMS Partner
              </p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-gray-200"></div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--brand-blue,#1e40af)] tracking-tight">
                Support
              </h2>
              <p className="text-xs sm:text-sm font-medium text-gray-500 mt-0.5">
                That Builds Trust
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image Overlay Container */}
        <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[350px] lg:h-auto z-10 overflow-hidden rounded-2xl lg:rounded-none">
          <div className="relative lg:absolute inset-0 lg:left-[-25%] lg:right-[-10vw] h-full w-full">
            <img
              src={hero_bg}
              alt="Manufacturing Solutions"
              className="w-full h-full object-cover object-center lg:object-right" 
            />
            
            {/* Desktop Fade Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent hidden lg:block w-full"></div>
            
            {/* Mobile/Tablet Fade Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent lg:hidden"></div>
          </div>
        </div>

      </div>

      {/* Services Section Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-16 sm:pb-24 bg-white">
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-200/80 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-200"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[var(--brand-blue,#1e40af)] transition-all duration-300 group-hover:bg-[var(--brand-orange,#ea580c)] group-hover:text-white">
                  <IconComponent size="24px" color="currentColor" />
                </div>

                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-gray-900 group-hover:text-[var(--brand-blue,#1e40af)] transition-colors">
                  {service.title}
                </h3>
                
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-gray-500">
                  {service.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}