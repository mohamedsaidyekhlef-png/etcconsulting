import React from 'react';
import FadeIn from '../components/ui/FadeIn';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Eileen's coaching transformed how I approach leadership. I'm more confident and my team is more engaged than ever.",
    author: "Sarah Jenkins",
    role: "VP of Marketing, TechFlow Inc."
  },
  {
    quote: "The team coaching sessions were a turning point for our department. We finally have the clarity we needed to execute our vision.",
    author: "Michael Ross",
    role: "Director of Operations, Global Logistics"
  },
  {
    quote: "I was skeptical about coaching at first, but the ROI has been undeniable. My promotion to C-suite was largely due to the strategic thinking skills I developed here.",
    author: "David Lee",
    role: "CTO, Innovate Corp"
  },
  {
    quote: "A perfect blend of empathy and tough love. Eileen knows exactly when to push you and when to support you.",
    author: "Amanda Chen",
    role: "Founder, StartUp Hub"
  },
  {
    quote: "The transition coaching program saved me months of trial and error in my new role. Highly recommended.",
    author: "Robert Fox",
    role: "Regional Director, FinServe"
  }
];

const Testimonials = () => {
  return (
    <div className="pt-20">
      <section className="bg-primary text-white py-20 text-center">
        <div className="container-custom">
          <h1 className="text-5xl font-display font-bold mb-4">Client Stories</h1>
          <p className="text-xl opacity-80">Hear from the leaders we've partnered with.</p>
        </div>
      </section>

      <section className="py-24 bg-soft-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <Quote className="text-secondary w-10 h-10 mb-6 opacity-30" />
                <p className="text-lg text-gray-700 italic mb-8 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cool-grey rounded-full flex items-center justify-center font-bold text-primary">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary">{t.author}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
