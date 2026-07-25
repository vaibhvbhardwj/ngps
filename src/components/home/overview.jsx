import Whowe from '../../assets/image.png';

export default function CompanyOverview() {
  return (
    <section className="bg-white py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div>
          <span className="text-[#f15a24] font-semibold tracking-wider uppercase text-sm">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mt-2 tracking-tight">
            NGPS Multitech Pvt. Ltd.
          </h2>
          <p className="text-xl text-[#2f60b3] font-medium mt-2">
            Support That Builds Trust
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">
            Your trusted partner for electronics after-sales support, bulk packaging, returns management, and OEM services across India. We bridge the gap between high-volume manufacturing and seamless consumer experiences.
          </p>
          
          {/* Quick Stats Grid */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex gap-8">
            <div>
              <span className="block text-2xl font-bold text-[#333333]">Pan-India</span>
              <span className="text-sm text-slate-500">Service Network</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-[#333333]">End-to-End</span>
              <span className="text-sm text-slate-500">Operations</span>
            </div>
          </div>
        </div>

        {/* Right: Modern Creative Frame Graphic */}
        <div className="relative w-full max-w-2xl mx-auto h-[450px] flex items-center justify-center p-4">
         {/* 1. Main Background Image Container */}
            <div className="absolute inset-0 w-[85%] h-[85%] left-0 top-0 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <img  src={Whowe}  alt="Electronics & EMS Experts"  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"/>
                {/* Soft overlay to blend image borders */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                </div>

         {/* 2. Creative Dashed Floating Border Accent */}
            <div className="absolute w-[85%] h-[85%] right-0 bottom-0 border-2 border-dashed border-[#2f60b3]/30 rounded-2xl -z-10 pointer-events-none" />

         {/* 3. Floating Micro-Card / Experience Badge */}
            <div className="absolute top-8 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce-slow">
             <div className="bg-[#2f60b3]/10 p-2 rounded-lg">
                 <i className='bx bx-check-shield text-[#2f60b3] text-xl'></i>
             </div>
             <div>
                <p className="text-xs text-slate-500 font-medium">Quality Assurance</p>
                 <p className="text-sm font-bold text-slate-800">100% Certified</p>
             </div>
            </div>

         {/* 4. Overlapping Content Card */}
            <div className="absolute bottom-4 right-8 max-w-md bg-white p-6 rounded-xl shadow-2xl border border-slate-100 z-10 transform translate-y-2">
              <div className="absolute -top-3 left-6 bg-[#2f60b3] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Core Capability
              </div>
              <h3 className="text-xl font-bold text-slate-800 mt-2 mb-3 flex items-center gap-2">
                  <i className='bx bx-chip text-[#2f60b3] text-2xl'></i> 
                 Electronics & EMS Experts
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                   Delivering high-capacity processing, precise quality checkpoints, and robust logistical lifelines from our hub in New Delhi.
              </p>
            </div>
        </div>


      </div>
    </section>
  );
}