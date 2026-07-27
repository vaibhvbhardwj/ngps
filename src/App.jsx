import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from '../src/components/common/Navbar';
import Footer from '../src/components/common/Footer';

import Home from '../src/pages/home';
import Service from '../src/pages/service';
import Contact from '../src/pages/contact';
import Quote from '../src/pages/quote';
import Privacy from '../src/pages/privacy';
import Terms from '../src/pages/terms';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });

      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return undefined;
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* The Navbar stays visible across all pages */}
      <Navbar /> 
      
      {/* The visible page content changes based on the URL path */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
