
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FireAlarmsFAQs = () => {
  const faqs = [
    {
      question: "What is the average lifespan of a fire alarm device?",
      answer: "Typically, 8 to 10 years. Sensors should be tested regularly and batteries replaced annually."
    },
    {
      question: "How often should I test my fire alarm?",
      answer: "Once a month. Testing takes under 5 minutes and ensures your system is always ready."
    },
    {
      question: "Can fire alarms be monitored on a mobile app?",
      answer: "Yes. Smart alarms connect to apps and alert you in real-time in case of fire, smoke, or system errors."
    },
    {
      question: "Do I need a fire alarm for a small office?",
      answer: "Yes, fire alarms are essential for any workplace regardless of size. Small offices should have at least smoke detectors in main areas and compliance with local fire safety regulations."
    },
    {
      question: "Will it work during a power cut?",
      answer: "Yes, all our fire alarm systems come with battery backup that can operate for 24-72 hours during power outages, ensuring continuous protection."
    },
    {
      question: "Can I upgrade an old alarm system?",
      answer: "Absolutely! We can upgrade your existing system to addressable or smart fire alarms, add new zones, or integrate with building management systems while using existing wiring where possible."
    },
    {
      question: "Can I receive alerts on my phone?",
      answer: "Yes! Our smart fire alarm systems can send instant notifications to your smartphone, security team, and monitoring center when an alarm is triggered."
    },
    {
      question: "What is the typical lifespan of a fire detector?",
      answer: "Smoke detectors typically last 8-10 years, while heat detectors can last 15-20 years. We provide replacement schedules and proactive maintenance to ensure optimal performance."
    },
    {
      question: "What's the difference between smoke and heat detectors?",
      answer: "Smoke detectors sense airborne particles from fires, while heat detectors respond to temperature changes. Smoke detectors are more sensitive and provide earlier warning, while heat detectors are better for dusty or steamy environments."
    },
    {
      question: "Are fire alarms mandatory for all buildings?",
      answer: "Yes, fire safety regulations mandate fire detection systems for most commercial buildings, apartments, and public spaces. Residential homes also benefit greatly from fire alarm installation."
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about fire alarm systems and safety
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-red-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Protect Your Property with Professional Fire Safety
            </h3>
            <p className="text-gray-600 mb-6">
              Don't wait for an emergency. Get a comprehensive fire safety assessment and modern alarm system installation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Schedule Fire Safety Audit
              </button>
              <button 
                onClick={() => window.open('https://wa.me/919990820830', '_blank')}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
