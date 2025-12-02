import React from 'react';
import FadeIn from '../components/ui/FadeIn';
import { Target, Heart, Zap, Compass } from 'lucide-react';

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-about-pattern bg-cover bg-center">
        <div className="container-custom relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">About ET Consulting Hub</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Dedicated to developing leaders who inspire, innovate, and drive meaningful change.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image Section - Removed sticky, added order-first for mobile logic if needed, though standard grid puts it first anyway */}
            <FadeIn>
              <img 
                src="https://i.postimg.cc/90M76Xc8/Screenshot-2025-11-22-002621.png" 
                alt="Eileen Terry" 
                className="rounded-lg shadow-xl w-full object-cover object-top h-[400px] md:h-[600px]"
              />
            </FadeIn>
            
            {/* Text Section */}
            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-display font-bold text-primary mb-2">Eileen Terry</h2>
              <p className="text-secondary font-medium mb-8">Founder & Principal Coach</p>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  A multi-experienced and multi-dimensional woman, Eileen started an active business career that has spanned the last 35 years. Her first business, a Kool-Aid stand, was fully capitalized with 100% R.O.I. (cost of goods and wagon were fully financed by parents). The golfers on the 7th hole of the local golf course were her target market. This first sales and marketing opportunity stimulated Eileen’s interest in pursuing a business career.
                </p>
                <p>
                  Eileen graduated with degrees in Philosophy and Sociology. After not finding a real market for a “Philosopher-in-Residence,” she started her business climb with Procter & Gamble. While employed there, and then at Pillsbury Corporation, she perfected her persuasive sales skills. She moved on to The Southland Corporation (7-11 stores) and then Chevron, taking positions from multi-unit oversight to marketing, merchandising, and operations management.
                </p>
                <p>
                  Eileen’s next stop was Blockbuster, Inc., where she successfully progressed upward through several key office positions before becoming the only female to reach the top ranking of Executive Vice President inside Blockbuster. Eileen was responsible for working with 100+ franchisees across the United States and Puerto Rico, representing 1,050 store locations, the company’s non-Blockbuster branded domestic retail concepts, and the operation of Blockbuster’s 400 Canadian stores. These totaled over 1 billion in revenue and 100 million in EBITDA annually. She also simultaneously served as the Global Diversity Officer driving forward Blockbuster’s global diversity efforts, where she successfully developed a world-class diversity council and program that resulted in several national awards by key ethnic/diversity groups.
                </p>
                <p>
                  Eileen’s most recent corporate position was as Chief People Officer for the Panda Restaurant Group where she was responsible for all enterprise human resources functions including strategy, recruitment, retention, training & people development platforms for the privately held, multi-brand casual dining retailer with 22,000 employees, $1.7B, and 1500+ units. She led and supported the development and execution of the Panda RG 2020 vision to become a World Class developer of people and employer of choice.
                </p>
                <p>
                  In 2013, Eileen returned to her ETC Consulting business. In over an 11-year period, Eileen developed ETC Consulting into a now thriving Executive/Leadership coaching and consulting business. She holds a PCC certification with the ICF (International Coaching Federation), and holds a Master Certification from The Hudson Institute of Learning.
                </p>
                <p>
                  Eileen is MBTI, BarOn EQ-I, and DISC certified. The BarOn EQ-I and the MBTI are two of the most informative, seasoned, scientifically validated and highly regarded assessments tools. When utilized, these tools provide comprehensive data in the areas identified as integral for personal and professional success.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 bg-primary text-white text-center">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-xl md:text-3xl font-display font-light italic max-w-4xl mx-auto leading-relaxed px-4">
              "ET Consulting Hub exists to help leaders and organizations gain clarity, build emotional and social intelligence, improve communication, and unlock performance."
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-soft-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-display font-bold text-primary">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Integrity", icon: Heart, desc: "We operate with absolute honesty and confidentiality." },
              { title: "Insight", icon: Compass, desc: "We dig deep to find the root causes and true potential." },
              { title: "Growth", icon: Zap, desc: "We are committed to continuous improvement for our clients." },
              { title: "Clarity", icon: Target, desc: "We cut through the noise to focus on what matters most." },
            ].map((val, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-white p-6 md:p-8 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <val.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm">{val.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
