import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Logo Component
  const BrandLogo = ({ isScrolled }: { isScrolled: boolean }) => (
    <div className="flex items-center gap-3 group">
      <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-secondary to-accent rounded-xl shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
        <span className="text-white font-display font-bold text-lg">ET</span>
      </div>
      <div className="flex flex-col justify-center">
        <span className={cn(
          "font-display font-bold text-lg leading-none tracking-tight",
          isScrolled || isOpen ? "text-primary" : "text-white"
        )}>
          Consulting
        </span>
        <span className={cn(
          "text-[10px] font-bold tracking-[0.2em] uppercase",
          isScrolled || isOpen ? "text-secondary" : "text-white/80"
        )}>
          Hub
        </span>
      </div>
    </div>
  );

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Z-Index 60 ensures logo stays above mobile menu overlay */}
        <Link to="/" className="z-[60] relative">
          <BrandLogo isScrolled={scrolled} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-all duration-200 hover:-translate-y-0.5",
                scrolled 
                  ? (location.pathname === link.path ? "text-secondary font-semibold" : "text-gray-600 hover:text-secondary")
                  : (location.pathname === link.path ? "text-white font-semibold" : "text-white/80 hover:text-white")
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            href="/booking" 
            variant={scrolled ? "primary" : "secondary"}
            size="sm"
            className={cn("shadow-lg", !scrolled && "bg-white text-primary hover:bg-white/90")}
          >
            Book a Session
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 z-[60] relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-primary" />
          ) : (
            <Menu size={24} className={scrolled ? "text-primary" : "text-white"} />
          )}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-50 flex flex-col pt-28 px-8 transition-transform duration-300 ease-in-out lg:hidden h-screen overflow-y-auto",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-2xl font-display font-bold text-primary flex items-center justify-between group border-b border-gray-50 pb-4"
              >
                {link.name}
                <ChevronRight className="text-secondary" />
              </Link>
            ))}
            <div className="mt-4">
              <Button href="/booking" fullWidth size="lg" className="shadow-xl shadow-secondary/20">
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
