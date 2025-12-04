import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import CaseStudy1 from './pages/CaseStudy1';
import CaseStudy2 from './pages/CaseStudy2';
import CaseStudy3 from './pages/CaseStudy3';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const basename = import.meta.env.MODE === 'development' ? '/' : '/Mayank_Gupta_portfolio';

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study-1" element={<CaseStudy1 />} />
          <Route path="/case-study-2" element={<CaseStudy2 />} />
          <Route path="/case-study-3" element={<CaseStudy3 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
