import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-secondary to-accent rounded-xl shadow-lg">
                <span className="text-white font-display font-bold text-lg">ET</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-lg leading-none text-white">Consulting</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">Hub</span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Developing Leaders, Transforming Organizations. Unlocking potential through evidence-based coaching and strategic insight.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-secondary hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Eileen', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Blog Insights', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/70 hover:text-secondary hover:translate-x-1 transition-all inline-flex items-center gap-2">
                    <ArrowRight size={12} className="opacity-0 hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Expertise</h4>
            <ul className="space-y-3">
              {[
                'Executive Coaching',
                'Team Coaching',
                'Transition Coaching',
                'Leadership Seminars',
                'Diagnostics & Assessments'
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-white/70 hover:text-secondary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-white/70 group">
                <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <MapPin className="shrink-0 text-secondary" size={18} />
                </div>
                <span>123 Leadership Ave, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Phone className="shrink-0 text-secondary" size={18} />
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Mail className="shrink-0 text-secondary" size={18} />
                </div>
                <span>hello@etconsultinghub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2025 ET Consulting Hub. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
