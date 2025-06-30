
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const DoorLocksFAQs = () => {
  const doorLockFaqs = [
    {
      question: "Will a smart lock fit my wooden or metal door?",
      answer: "Yes. Most smart locks fit standard door thicknesses. We recommend sharing door images for better compatibility checks."
    },
    {
      question: "Will my smart lock still work during power or internet outages?",
      answer: "Yes. Most smart locks use battery power and support Bluetooth unlocking. Some models come with physical key backups."
    },
    {
      question: "What if my smart lock's battery dies?",
      answer: "You will be notified in advance. Also, emergency USB charging or mechanical key options are available in most models."
    },
    {
      question: "Can I install a smart lock myself?",
      answer: "While some smart locks are designed for DIY installation, we recommend professional installation to ensure proper alignment, security, and warranty coverage."
    },
    {
      question: "How secure are smart locks compared to traditional locks?",
      answer: "Smart locks often provide enhanced security features like tamper alerts, activity logs, and temporary access codes. They use encrypted communication and are designed to be as secure as traditional deadbolts."
    },
    {
      question: "Can I integrate smart locks with other smart home devices?",
      answer: "Yes! Most smart locks work with popular platforms like Alexa, Google Home, and Apple HomeKit, allowing integration with cameras, lights, and security systems."
    },
    {
      question: "What happens if I lose my phone?",
      answer: "Smart locks typically offer multiple access methods including backup keys, keypads, or secondary user access through family members' phones."
    },
    {
      question: "How long do smart lock batteries last?",
      answer: "Most smart lock batteries last 6-12 months depending on usage. You'll receive low battery notifications well in advance through the mobile app."
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Door Lock FAQs
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about smart locks and door security solutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {doorLockFaqs.map((faq, index) => (
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
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need Smart Lock Installation?
            </h3>
            <p className="text-gray-600 mb-6">
              Our certified technicians provide professional installation and setup for all smart lock brands.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
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
