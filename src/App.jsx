import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../src/components/common/Navbar';
import Footer from '../src/components/common/Footer';

import Home from '../src/pages/home';
import Service from '../src/pages/service';
import Contact from '../src/pages/contact';

function App() {
  return (
    <Router>
      {/* The Navbar stays visible across all pages */}
      <Navbar /> 
      
      {/* The visible page content changes based on the URL path */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;