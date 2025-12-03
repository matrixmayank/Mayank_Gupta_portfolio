import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import CaseStudy1 from './pages/CaseStudy1';
import CaseStudy2 from './pages/CaseStudy2';
import CaseStudy3 from './pages/CaseStudy3';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="min-h-screen bg-primary text-text font-sans selection:bg-accent selection:text-primary flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-study-1" element={<CaseStudy1 />} />
            <Route path="/case-study-2" element={<CaseStudy2 />} />
            <Route path="/case-study-3" element={<CaseStudy3 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
