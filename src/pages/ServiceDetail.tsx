import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from './Services';
import Button from '../components/ui/Button';
import FadeIn from '../components/ui/FadeIn';
import { CheckCircle2 } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <section className="bg-primary text-white py-24">
        <div className="container-custom">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-secondary">
                <service.icon size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold">{service.title}</h1>
            </div>
            <p className="text-xl text-white/80 max-w-3xl">{service.shortDesc}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="text-2xl font-display font-bold text-primary mb-6">Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-12">
                  {service.fullDesc}
                  <br /><br />
                  At ET Consulting Hub, we believe that true leadership development requires a holistic approach. This service is tailored to address specific challenges while fostering long-term growth and resilience.
                </p>

                <h2 className="text-2xl font-display font-bold text-primary mb-6">What to Expect</h2>
                <div className="bg-soft-white p-8 rounded-xl border border-gray-100 mb-12">
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                        <span className="text-gray-700 text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h2 className="text-2xl font-display font-bold text-primary mb-6">Who is this for?</h2>
                <p className="text-gray-600 mb-8">
                  This service is ideal for leaders, managers, and teams who are committed to self-improvement and organizational excellence. Whether you are facing a specific hurdle or simply want to accelerate your growth, our evidence-based approach will provide the clarity you need.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-1">
              <FadeIn delay={0.2} className="sticky top-32">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-display font-bold text-primary mb-6">Investment</h3>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-primary">{service.price}</span>
                    <span className="text-gray-500 ml-2">{service.priceUnit}</span>
                  </div>
                  <div className="space-y-4">
                    <Button href="/booking" fullWidth size="lg">Book Now</Button>
                    <Button href="/contact" variant="outline" fullWidth>Contact for Custom Quote</Button>
                  </div>
                  <p className="text-xs text-gray-400 mt-6 text-center">
                    Prices subject to change. Corporate packages available.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
