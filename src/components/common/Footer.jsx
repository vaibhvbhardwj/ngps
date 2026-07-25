import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import footerBg from "../../assets/background-banner.png"; // <-- your warehouse image

import {
  Phone,
  Envelope,
  Location,
  Linkedin,
  FacebookSquare,
  Instagram,
} from "@boxicons/react";

// social links needed to be added

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-cover bg-[85%_center] md:bg-center text-white"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(8,18,35,0.86)]"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>

            <img
              src={logo}
              alt="NGPS Multitech"
              className="h-16 w-auto"
            />

            <p className="mt-6 leading-8 text-slate-300">
              Delivering reliable Packaging,
              EMS Assembly, OEM Manufacturing
              and Returns Management solutions
              with quality, precision and timely execution.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)]"
              >
                <Linkedin size="22px" />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)]"
              >
                <FacebookSquare size="22px" />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)]"
              >
                <Instagram size="22px" />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold tracking-wide">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                className="text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-[var(--brand-orange)]"
              >
                Home
              </Link>

              <Link
                to="/service"
                className="text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-[var(--brand-orange)]"
              >
                Services
              </Link>

              <Link
                to="/contact"
                className="text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-[var(--brand-orange)]"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-bold tracking-wide">
              Our Services
            </h3>

            <div className="flex flex-col gap-4 text-slate-300">

              <p>Packaging</p>

              <p>Returns Management</p>

              <p>EMS Assembly</p>

              <p>OEM Manufacturing</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold tracking-wide">
              Contact
            </h3>

            <div className="space-y-6">

              {/* Phone */}

              <a
                href="tel:+919818867565"
                className="group flex items-start gap-4"
              >

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-[var(--brand-orange)]">

                  <Phone size="20px" />

                </div>

                <div>

                  <p className="text-sm text-slate-400">
                    Phone
                  </p>

                  <p className="text-slate-200 transition group-hover:text-[var(--brand-orange)]">
                    +91 9818867565
                  </p>

                </div>

              </a>

              {/* Email */}

              <a
                href="mailto:ngpsmultitech@gmail.com?subject=Business Inquiry"
                className="group flex items-start gap-4"
              >

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-[var(--brand-orange)]">

                  <Envelope size="20px" />

                </div>

                <div>

                  <p className="text-sm text-slate-400">
                    Email
                  </p>

                  <p className="text-slate-200 transition group-hover:text-[var(--brand-orange)]">
                    ngpsmultitech@gmail.com
                  </p>

                </div>

              </a>

              {/* Location */}

              <a
                href="https://maps.google.com/?q=28.54366217571346,77.03128237549751"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-[var(--brand-orange)]">

                  <Location size="20px" />

                </div>

                <div>

                  <p className="text-sm text-slate-400">
                    Location
                  </p>

                  <p className="text-slate-200 transition group-hover:text-[var(--brand-orange)]">
                    Unit No.14,
                    Near State Bank of India,
                    Bamnoli Village,
                    Dwarka Sec-28
                    <br />
                    New Delhi -110077
                  </p>

                </div>

              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 border-t border-white/20"></div>

        {/* Certifications */}

        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-300">

          <span>ISO Certified</span>

          <span>•</span>

          <span>Quality Assured</span>

          <span>•</span>

          <span>EMS & OEM Solutions</span>

          <span>•</span>

          <span>Since 2026</span>

        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/20 pt-8 text-sm md:flex-row">

          <p className="text-slate-400">
            © {new Date().getFullYear()} NGPS Multitech Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex gap-8">

            <Link
              to="/privacy"
              className="text-slate-400 transition hover:text-[var(--brand-orange)]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-slate-400 transition hover:text-[var(--brand-orange)]"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}