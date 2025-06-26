
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const CCTVFAQs = () => {
  const faqs = [
    {
      question: "Can I view CCTV footage on my mobile?",
      answer: "Yes! Most modern CCTV systems come with mobile apps that allow you to view live footage and recorded videos from anywhere with an internet connection. We'll help you set up the app and train you on its features."
    },
    {
      question: "Is night vision available for outdoor cameras?",
      answer: "Absolutely! We offer infrared (IR) cameras with excellent night vision capabilities. These cameras can capture clear footage even in complete darkness, with ranges from 20 to 100+ meters depending on the model."
    },
    {
      question: "Can I integrate AI or face recognition with existing setup?",
      answer: "Yes, in many cases we can upgrade your existing system with AI-powered cameras or add facial recognition capabilities. Our technicians will assess your current setup and recommend the best upgrade path."
    },
    {
      question: "What's the typical range of a bullet camera?",
      answer: "Bullet cameras typically have excellent zoom capabilities and can monitor areas from 50 to 200+ meters depending on the lens. They're perfect for long corridors, parking lots, and perimeter monitoring."
    },
    {
      question: "Will my CCTV system work during a power outage?",
      answer: "Yes, with proper backup solutions! We can install UPS (Uninterruptible Power Supply) systems that keep your cameras running for several hours during power cuts. Some wireless cameras also have built-in battery backup."
    },
    {
      question: "How often should I get my system checked?",
      answer: "We recommend quarterly maintenance checks to clean lenses, check connections, and ensure optimal performance. However, modern IP cameras are quite reliable and may only need bi-annual professional servicing."
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about CCTV installation and monitoring
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
