
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const CCTVFAQs = () => {
  const faqs = [
    {
      question: "Can I view CCTV footage on my mobile?",
      answer: "Yes, with our IP camera systems, you can view live footage and recorded videos on your smartphone through dedicated mobile apps. We provide complete setup and training for mobile access."
    },
    {
      question: "Is night vision available for outdoor cameras?",
      answer: "Absolutely! Our outdoor cameras come with infrared night vision capabilities that can capture clear footage even in complete darkness up to 30-50 meters depending on the camera model."
    },
    {
      question: "Can I integrate AI or face recognition with existing setup?",
      answer: "Yes, we can upgrade your existing CCTV system with AI-powered cameras that support face recognition, motion detection, and smart analytics. This depends on your current system compatibility."
    },
    {
      question: "What's the typical range of a bullet camera?",
      answer: "Bullet cameras typically have a range of 20-100 meters depending on the lens size and resolution. We help you choose the right camera based on your specific coverage requirements."
    },
    {
      question: "Will my CCTV system work during a power outage?",
      answer: "With our UPS backup solutions, your CCTV system can continue operating for 2-8 hours during power outages, depending on the backup capacity you choose."
    },
    {
      question: "How often should I get my system checked?",
      answer: "We recommend quarterly maintenance checks to ensure optimal performance. Our AMC plans include regular cleaning, software updates, and hardware inspections."
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
            Common questions about CCTV systems and installation
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
