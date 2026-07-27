import hero_bg from '../../assets/ngps_hero_bg.jpg';
import {
  Package,
  RefreshCw,
  Chip,
  Building,
} from "@boxicons/react";
import { Link } from 'react-router-dom';

export default function Hero() {
  const services = [
    {
      title: "Bulk Packaging",
      subtitle: "Secure Packaging",
      icon: Package,
    },
    {
      title: "Returns Management",
      subtitle: "Refurbishment",
      icon: RefreshCw,
    },
    {
      title: "EMS Services",
      subtitle: "Assembly Solutions",
      icon: Chip,
    },
    {
      title: "ESD Solutions",
      subtitle: "Safe Product Handling",
      icon: Building,
    },
  ];

  return (
    <section className="relative overflow-x-hidden bg-white w-full">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Keep the image inside the upper hero area so it cannot extend behind the cards. */}
      <div className="relative">
        <div className="absolute inset-y-0 right-0 z-10 hidden w-1/2 overflow-hidden lg:block">
          <img
            src={hero_bg}
            alt="Manufacturing Solutions"
            className="h-full w-full object-cover object-right"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent" />
        </div>

        {/* Main content container */}
        <div className="relative z-20 mx-auto min-h-[500px] max-w-7xl px-4 sm:px-6 lg:min-h-[620px]">

          {/* Left Side: Text & Content */}
          <div className="flex min-h-[500px] flex-col pb-10 pt-6 sm:pt-8 lg:min-h-[620px] lg:w-1/2 lg:pb-12 lg:pr-8 lg:pt-10">
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
            Your trusted partner for electronics Assembly,
            bulk packaging, return management and ESD solutions.
            We help brands streamline manufacturing support,
            packaging and Return Management with reliability and precision.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/quote" className="w-full sm:w-auto text-center rounded-xl bg-[var(--brand-orange,#ea580c)] px-8 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              Request Quote
            </Link>
            <Link to="/service" className="w-full sm:w-auto text-center rounded-xl border-2 border-[var(--brand-blue,#1e40af)] bg-white px-8 py-3.5 font-semibold text-[var(--brand-blue,#1e40af)] transition-all duration-300 hover:bg-blue-50">
              Explore Services
            </Link>
          </div>

          {/* Stats Block - Fixed Wrap and Gap for Mobile */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 flex flex-wrap items-center gap-6 sm:gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--brand-blue,#1e40af)] tracking-tight">
                Electronics
              </h2>
              <p className="text-xs sm:text-sm font-medium text-gray-500 mt-0.5">
                Manufacturing Services
              </p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-gray-200"></div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--brand-blue,#1e40af)] tracking-tight">
                Bulk
              </h2>
              <p className="text-xs sm:text-sm font-medium text-gray-500 mt-0.5">
                Packaging
              </p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-gray-200"></div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--brand-blue,#1e40af)] tracking-tight">
                Return
              </h2>
              <p className="text-xs sm:text-sm font-medium text-gray-500 mt-0.5">
                Management
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Services Section Container */}
      <div className="relative z-30 mx-auto max-w-7xl bg-white px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-200/80 bg-white p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[var(--brand-blue,#1e40af)] transition-all duration-300 group-hover:bg-[var(--brand-orange,#ea580c)] group-hover:text-white">
                  <IconComponent size="24px" color="currentColor" />
                </div>

                <h3 className="mt-4 text-sm font-bold text-gray-900 transition-colors group-hover:text-[var(--brand-blue,#1e40af)] sm:mt-5 sm:text-lg">
                  {service.title}
                </h3>
                
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500 sm:mt-2 sm:text-sm">
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
