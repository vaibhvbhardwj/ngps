import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from '@boxicons/react';
import logo from '../../assets/logo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' },
    { name: 'Contact', path: '/contact' },
    { name: 'Quote', path: '/quote'},
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* ================= Navbar ================= */}
      <header className='sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md'>
        <div className='mx-auto flex h-[88px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>

          {/* Logo */}
          <Link
            to='/'
            className='flex items-center gap-3'
          >
            <img
              src={logo}
              alt='Company Logo'
              className='h-12 w-auto object-contain sm:h-14'
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-10'>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group relative text-[15px] font-semibold transition-colors duration-300 ${
                    isActive
                      ? 'text-[var(--brand-blue)]'
                      : 'text-slate-700 hover:text-[var(--brand-blue)]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] bg-[var(--brand-blue)] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className='hidden lg:flex items-center gap-6'>

            {/* Phone */}
            <a href="tel:+919818867565" className="flex items-start gap-3 cursor-pointer" >
            <div className='flex items-center gap-3 '  >
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-bg)]'>
                <Phone
                  size='20px'
                  className='text-[var(--brand-blue)]'
                />
              </div>

              <div>
                <p className='text-xs text-slate-500'>
                  Call Us
                </p>

                <p className='font-semibold text-[var(--brand-dark)]'>
                  +91 9818867565 
                </p>
              </div>
            </div>
            </a>

            {/* Need to create a proper form for cta */}
            {/* CTA */}  
            <Link to='/quote' className='group flex items-center gap-2 rounded-xl bg-[var(--brand-orange)] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-cta-hover)] hover:shadow-lg'>
              Request Quote
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className='rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden'
            aria-label='Open menu'
          >
            <Menu size='32px' />
          </button>
        </div>
      </header>

      {/* ================= Mobile Drawer ================= */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 h-full w-[320px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >

          {/* Header */}
          <div className='flex items-center justify-between border-b border-slate-200 p-5'>
            <div className='flex items-center gap-3'>
              <img
                src={logo}
                alt='Company Logo'
                className='h-12 w-auto object-contain'
              />
            </div>

            <button
              onClick={closeMenu}
              className='rounded-lg p-2 hover:bg-slate-100'
              aria-label='Close menu'
            >
              <X size='28px' />
            </button>
          </div>

          {/* Links */}
          <nav className='flex flex-col py-4'>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-slate-100 px-6 py-4 text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[var(--accent-bg)] text-[var(--brand-blue)]'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[var(--brand-blue)]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className='mt-auto border-t border-slate-200 p-6'>

            <a href="tel:+919818867565" className="flex items-start gap-3 cursor-pointer" >
            <div className='flex items-start gap-3'>
              <div className='mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-bg)]'>
                <Phone
                  size='20px'
                  className='text-[var(--brand-blue)]'
                />
              </div>

              <div>
                <p className='text-sm text-slate-500'>
                  Call Us
                </p>

                <p className='font-semibold text-[var(--brand-dark)]'>
                  +91 9818867565
                </p>
              </div>
            </div>
            </a>

            <Link to='/quote' onClick={closeMenu} className='group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--brand-orange)] py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[var(--accent-cta-hover)]'>
              Request Quote
            </Link>

          </div>
        </aside>
      </div>
    </>
  );
}
