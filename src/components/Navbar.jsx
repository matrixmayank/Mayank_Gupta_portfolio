import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-bold tracking-tight group">
          <span className="text-white group-hover:text-accent transition-colors">Mayank</span>
          <span className="text-accent group-hover:text-white transition-colors">.Gupta</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-sm font-medium text-text-secondary hover:text-white transition-colors"
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-0.5 w-full bg-accent mt-1"
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <a
            href={`${import.meta.env.BASE_URL}assets/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40"
          >
            <Download size={16} className="mr-2" />
            Resume
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${location.pathname === link.path ? 'text-accent' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 w-full my-4"></div>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Switch Theme</span>
                <ThemeToggle />
              </div>
              <a
                href={`${import.meta.env.BASE_URL}assets/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-accent rounded-xl hover:bg-accent-dark transition-all"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
              <div className="flex justify-center space-x-8 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors"><Github size={24} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href="mailto:mayankgupta.letters@gmail.com" className="text-text-muted hover:text-white transition-colors"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
