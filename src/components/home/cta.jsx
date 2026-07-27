
import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section className="bg-white px-6 py-10 sm:px-8 md:py-12">
      {/* Container is styled purely in crisp white with an intentional, premium inner-border frame */}
      <div className="max-w-7xl mx-auto bg-white border-2 border-[#2f60b3]/20 text-[#333333] rounded-2xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
        
        {/* Subtle geometric structural accent line */}
        <div className="absolute top-0 right-0 w-32 h-full bg-slate-50 pointer-events-none transform skew-x-12" />
        
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#333333]">
            Ready to Optimize Your <span className="text-[var(--brand-orange)]"> After-Sales Infrastructure? </span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm max-w-xl">
            Let's coordinate a practical service plan for your electronic products. Connect with our operations team to discuss your requirements today.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-6 items-center">
            <Link
              to="/quote"
              className="px-6 py-3 rounded-lg bg-[#f15a24] hover:bg-[#d94b18] text-white font-medium transition-colors text-sm shadow-md inline-flex items-center gap-2"
            >
              Request a Quote
            </Link>
            <div className="text-sm text-slate-500 flex items-center gap-2">
              <i className='bx bx-phone text-[#2f60b3] text-lg'></i>
              Direct Line: <span className="text-[#333333] font-semibold">+91 9818867565</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
