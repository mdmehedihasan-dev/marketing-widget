import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Initialize theme state based on localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Apply theme class to document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 text-primary">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.578 8.578C5.528 11.628 3.451 15.515 2.609 19.745C1.768 23.976 2.2 28.361 3.85 32.346C5.501 36.331 8.297 39.738 11.883 42.134C15.47 44.53 19.687 45.81 24 45.81C28.314 45.81 32.53 44.53 36.117 42.134C39.703 39.738 42.499 36.331 44.149 32.346C45.8 28.361 46.232 23.976 45.39 19.745C44.549 15.515 42.472 11.628 39.422 8.578L24 24L8.578 8.578Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Marketing Widget</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <span className="material-symbols-outlined">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1"></div>
            <Link to="/login" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary">
              Client Login
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-primary text-white text-sm font-bold transition-colors hover:bg-primary-dark">
              Get a Quote
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <span className="material-symbols-outlined">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button 
              className="p-2 text-gray-600 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 absolute w-full left-0 top-16 shadow-lg transition-colors duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4 flex flex-col gap-3">
              <Link to="/login" className="block text-center px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary rounded-md">
                Client Login
              </Link>
              <Link to="/contact" className="block text-center px-3 py-2 text-base font-medium bg-primary text-white rounded-md">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 text-primary">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.578 8.578C5.528 11.628 3.451 15.515 2.609 19.745C1.768 23.976 2.2 28.361 3.85 32.346C5.501 36.331 8.297 39.738 11.883 42.134C15.47 44.53 19.687 45.81 24 45.81C28.314 45.81 32.53 44.53 36.117 42.134C39.703 39.738 42.499 36.331 44.149 32.346C45.8 28.361 46.232 23.976 45.39 19.745C44.549 15.515 42.472 11.628 39.422 8.578L24 24L8.578 8.578Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-white">Marketing Widget</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              A results-driven digital marketing agency helping businesses grow through innovative solutions and strategies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><span className="material-symbols-outlined">public</span></a>
              <a href="#" className="hover:text-primary transition-colors"><span className="material-symbols-outlined">mail</span></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Paid Advertising</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Social Media</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Branding</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
            <div className="mt-6 text-sm">
              <p className="font-semibold text-white mb-1">Contact:</p>
              <p>{COMPANY_INFO.email}</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};