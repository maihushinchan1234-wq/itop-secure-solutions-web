
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FireAlarmsFAQs = () => {
  const faqs = [
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
      question: "How often should I test my fire alarm system?",
      answer: "We recommend monthly testing of alarms and quarterly professional inspections. Our AMC plans include regular testing, maintenance, and compliance reporting."
    },
    {
      question: "Can I receive alerts on my phone?",
      answer: "Yes! Our smart fire alarm systems can send instant notifications to your smartphone, security team, and monitoring center when an alarm is triggered."
    },
    {
      question: "What is the typical lifespan of a fire detector?",
      answer: "Smoke detectors typically last 8-10 years, while heat detectors can last 15-20 years. We provide replacement schedules and proactive maintenance to ensure optimal performance."
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
      </div>
    </section>
  );
};
