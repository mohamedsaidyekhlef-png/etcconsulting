import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';
import Button from '../components/ui/Button';
import { Users, Award, TrendingUp, BookOpen } from 'lucide-react';

export const servicesData = [
  {
    id: 'executive-coaching',
    title: 'Executive Coaching',
    icon: Award,
    shortDesc: '1:1 leadership coaching to enhance decision-making and emotional intelligence.',
    fullDesc: 'Our Executive Coaching program is designed for senior leaders who want to elevate their impact. We focus on strategic thinking, executive presence, and emotional intelligence.',
    benefits: ['Enhanced self-awareness', 'Better decision making', 'Improved conflict resolution', 'Strategic visioning'],
    price: '$350',
    priceUnit: 'per hour',
    bookingType: '1-hour Live Coaching'
  },
  {
    id: 'team-coaching',
    title: 'Team Coaching',
    icon: Users,
    shortDesc: 'Improve communication, teamwork, trust, and collaboration.',
    fullDesc: 'Transform your group into a high-performing team. We address dysfunctions, build trust, and align team members around shared goals and values.',
    benefits: ['Increased trust', 'Clearer communication', 'Aligned goals', 'Higher productivity'],
    price: '$500',
    priceUnit: 'per 90 min',
    bookingType: '90-minute Group Coaching'
  },
  {
    id: 'transition-coaching',
    title: 'Transition Coaching',
    icon: TrendingUp,
    shortDesc: 'Support for leaders moving into new roles or navigating change.',
    fullDesc: 'The first 90 days in a new role are critical. We provide the framework and support to ensure you hit the ground running and secure early wins.',
    benefits: ['Faster onboarding', 'Stakeholder management', 'Cultural adaptation', 'Early wins strategy'],
    price: 'Custom',
    priceUnit: 'package',
    bookingType: '1-hour Live Coaching'
  },
  {
    id: 'leadership-seminars',
    title: 'Seminars & Workshops',
    icon: BookOpen,
    shortDesc: 'On-site or virtual seminars for broad leadership development.',
    fullDesc: 'Interactive workshops covering topics like "Leading with EQ", "The Art of Feedback", and "Resilient Leadership" for your broader organization.',
    benefits: ['Scalable learning', 'Interactive format', 'Team bonding', 'Practical tools'],
    price: 'Custom',
    priceUnit: 'per event',
    bookingType: '90-minute Group Coaching'
  }
];

const Services = () => {
  return (
    <>
      <section className="bg-primary py-24 text-white text-center">
        <div className="container-custom">
          <FadeIn>
            <h1 className="text-5xl font-display font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Tailored solutions to meet the unique challenges of modern leadership and organizational dynamics.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-soft-white">
        <div className="container-custom">
          <div className="grid gap-12">
            {servicesData.map((service, idx) => (
              <FadeIn key={service.id} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                  <div className="p-8 md:p-12 flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center">
                        <service.icon size={24} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">{service.title}</h2>
                    </div>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {service.fullDesc}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4 items-center">
                      <Button href={`/services/${service.id}`}>View Details</Button>
                      <span className="text-primary font-bold text-lg">
                        {service.price} <span className="text-sm font-normal text-gray-500">{service.priceUnit}</span>
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-100 md:w-1/3 min-h-[200px] md:min-h-full relative">
                     {/* Placeholder for service specific imagery */}
                     <div className="absolute inset-0 bg-primary/5 flex items-center justify-center text-primary/20 font-display font-bold text-4xl">
                        ET
                     </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
