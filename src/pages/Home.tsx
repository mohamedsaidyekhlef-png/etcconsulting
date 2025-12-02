import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';
import Button from '../components/ui/Button';
import FadeIn from '../components/ui/FadeIn';

const Home = () => {
  return (
    <>
      {/* Hero Section with Catchy Aurora Background */}
      <section className="relative min-h-screen flex items-center justify-center bg-aurora text-white overflow-hidden px-4">
        
        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-grid-texture pointer-events-none"></div>
        
        {/* Floating "Sowing" Particles */}
        <div className="particles-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="container-custom relative z-10 text-center pt-24 md:pt-20">
          <FadeIn delay={0.1}>
            <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 bg-white/10 inline-block px-4 py-1 rounded-full backdrop-blur-sm border border-white/10 text-xs md:text-sm shadow-lg">
              Unlock Your Potential
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 leading-tight drop-shadow-2xl">
              ET Consulting Hub
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-2xl text-white/90 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
              Executive Coaching • Team Coaching • Leadership Development
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button href="/booking" size="lg" variant="secondary" className="shadow-xl shadow-secondary/20 w-full sm:w-auto font-bold tracking-wide">
              Book a Session
            </Button>
            <Button href="/services" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm w-full sm:w-auto font-medium">
              Explore Services
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-tl-3xl -z-10" />
                <img 
                  src="https://i.postimg.cc/90M76Xc8/Screenshot-2025-11-22-002621.png" 
                  alt="Eileen Terry" 
                  className="rounded-lg shadow-xl w-full object-cover object-top h-[400px] md:h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block border border-gray-50">
                  <p className="font-display font-bold text-primary text-lg">"Leadership is not a position or a title, it is action and example."</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Meet Eileen Terry</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Eileen Terry is an executive coach with decades of experience developing emerging leaders through communication mastery, emotional intelligence, and personalized leadership programs.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With a warm yet challenging approach, she helps executives and teams break through barriers to achieve sustainable high performance.
              </p>
              <Button href="/about" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">Read Full Bio</Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-soft-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Our Expertise</h2>
            <p className="text-gray-600">Comprehensive coaching solutions tailored for modern leadership challenges.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Executive Coaching",
                desc: "Personalized 1:1 coaching to enhance decision-making, clarity, and emotional intelligence.",
                icon: Award,
                link: "/services/executive-coaching"
              },
              {
                title: "Team Coaching",
                desc: "Build trust, improve communication, and foster collaboration within your organization.",
                icon: Users,
                link: "/services/team-coaching"
              },
              {
                title: "Transition Coaching",
                desc: "Strategic support for leaders stepping into new roles or navigating organizational change.",
                icon: TrendingUp,
                link: "/services/transition-coaching"
              }
            ].map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link to={service.link} className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-primary text-white overflow-hidden relative">
        {/* Subtle background pattern for this section too */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Why Leaders Choose ET Consulting Hub</h2>
              <div className="space-y-6">
                {[
                  "Evidence-based coaching methodologies grounded in psychology.",
                  "Focus on Emotional Intelligence (EQ) as a key driver of success.",
                  "Advanced leadership diagnostics (MBTI, EQ-i 2.0).",
                  "Customized programs aligned with organizational goals."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <CheckCircle className="text-secondary shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                    <p className="text-lg text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-500">
                <div className="flex flex-col gap-8">
                  <div className="text-center">
                    <span className="block text-4xl md:text-5xl font-display font-bold text-secondary mb-2">20+</span>
                    <span className="text-white/70">Years Experience</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="text-center">
                    <span className="block text-4xl md:text-5xl font-display font-bold text-secondary mb-2">500+</span>
                    <span className="text-white/70">Leaders Coached</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="text-center">
                    <span className="block text-4xl md:text-5xl font-display font-bold text-secondary mb-2">100%</span>
                    <span className="text-white/70">Commitment to Growth</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12 md:mb-16">Client Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: "Eileen's coaching transformed how I approach leadership. I'm more confident, clearer in my communication, and my team is performing better than ever.",
                author: "Sarah Jenkins",
                role: "VP of Operations, TechCorp"
              },
              {
                quote: "The team coaching sessions were a game changer. We moved from silos to a unified, high-performing unit in just six months.",
                author: "Michael Ross",
                role: "Director, Global Logistics"
              },
              {
                quote: "Transitioning to the C-suite was daunting, but ET Consulting provided the roadmap and support I needed to succeed immediately.",
                author: "David Chen",
                role: "Chief Financial Officer"
              }
            ].map((t, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-soft-white p-8 rounded-xl relative group hover:shadow-lg transition-all">
                <div className="text-secondary text-6xl font-serif absolute top-4 left-4 opacity-20 group-hover:opacity-30 transition-opacity">"</div>
                <p className="text-gray-600 italic mb-6 relative z-10">{t.quote}</p>
                <div>
                  <p className="font-bold text-primary">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-cool-grey/30">
        <div className="container-custom text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Ready to Elevate Your Leadership?</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Take the first step towards transformative growth. Book your initial consultation today.
            </p>
            <Button href="/booking" size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/10">Book Your Session Today</Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Home;
