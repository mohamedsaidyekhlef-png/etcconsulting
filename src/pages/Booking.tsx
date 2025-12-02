import React, { useState } from 'react';
import FadeIn from '../components/ui/FadeIn';
import Button from '../components/ui/Button';
import { Calendar, Clock, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  { id: 1, name: '1-hour Live Coaching', price: 350, duration: '60 min' },
  { id: 2, name: '90-minute Group Coaching', price: 500, duration: '90 min' },
];

// Mock dates for the calendar
const dates = Array.from({ length: 14 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i + 1);
  return d;
});

const timeSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '03:30 PM'];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', notes: '' });

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <div className="min-h-screen bg-soft-white py-24">
      <div className="container-custom max-w-4xl">
        <FadeIn>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-primary p-8 text-white flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-display font-bold">Book Your Session</h1>
                <p className="text-white/70 text-sm">Step {step} of 4</p>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={cn("h-2 w-8 rounded-full transition-colors", i <= step ? "bg-secondary" : "bg-white/20")} />
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12 min-h-[400px]">
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary mb-6">Select a Service</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {services.map(service => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={cn(
                          "text-left p-6 rounded-xl border-2 transition-all hover:shadow-md",
                          selectedService === service.id 
                            ? "border-secondary bg-secondary/5" 
                            : "border-gray-100 hover:border-secondary/50"
                        )}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <span className="font-bold text-primary text-lg">{service.name}</span>
                          {selectedService === service.id && <CheckCircle className="text-secondary" />}
                        </div>
                        <div className="flex justify-between items-end">
                          <span className="text-gray-500 flex items-center gap-2"><Clock size={16}/> {service.duration}</span>
                          <span className="text-xl font-bold text-primary">${service.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-primary">Select Date & Time</h2>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Available Dates</h3>
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                      {dates.map((date, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(date)}
                          className={cn(
                            "flex-shrink-0 w-20 h-24 rounded-lg border flex flex-col items-center justify-center transition-all",
                            selectedDate === date
                              ? "bg-primary text-white border-primary shadow-lg"
                              : "bg-white border-gray-200 hover:border-secondary text-gray-600"
                          )}
                        >
                          <span className="text-xs font-medium uppercase">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                          <span className="text-2xl font-bold my-1">{date.getDate()}</span>
                          <span className="text-xs">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <FadeIn>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Available Times</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "py-3 px-4 rounded-lg border text-sm font-medium transition-all",
                              selectedTime === time
                                ? "bg-secondary text-white border-secondary"
                                : "border-gray-200 hover:border-secondary text-gray-600"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </FadeIn>
                  )}
                </div>
              )}

              {/* Step 3: Details */}
              {step === 3 && (
                <form id="booking-form" onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary">Your Details</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-gray-700">Notes (Optional)</label>
                      <textarea 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all h-32 resize-none"
                        placeholder="Anything specific you'd like to discuss?"
                        value={formData.notes}
                        onChange={e => setFormData({...formData, notes: e.target.value})}
                      />
                    </div>
                  </div>
                </form>
              )}

              {/* Step 4: Success */}
              {step === 4 && (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-primary mb-4">Booking Confirmed!</h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Thank you, {formData.name}. A calendar invitation has been sent to {formData.email}. We look forward to speaking with you.
                  </p>
                  <Button href="/" variant="outline">Return Home</Button>
                </div>
              )}
            </div>

            {/* Footer Controls */}
            {step < 4 && (
              <div className="bg-gray-50 p-6 border-t border-gray-100 flex justify-between">
                {step > 1 ? (
                  <Button variant="ghost" onClick={handleBack}>
                    <ChevronLeft size={18} className="mr-2" /> Back
                  </Button>
                ) : <div />}
                
                <Button 
                  onClick={step === 3 ? undefined : handleNext}
                  form={step === 3 ? "booking-form" : undefined}
                  type={step === 3 ? "submit" : "button"}
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && (!selectedDate || !selectedTime))
                  }
                >
                  {step === 3 ? "Confirm Booking" : "Next Step"} <ChevronRight size={18} className="ml-2" />
                </Button>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Booking;
