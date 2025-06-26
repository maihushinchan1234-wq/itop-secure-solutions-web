
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const DoorLocksFAQs = () => {
  const faqs = [
    {
      question: "Can I upgrade my regular lock to a smart lock without changing the door?",
      answer: "In most cases, yes! We can retrofit smart locks on existing wooden or metal doors. Our technicians assess your door and recommend the best smart lock solution that fits your current setup."
    },
    {
      question: "Do you offer emergency lockout services?",
      answer: "Yes, we provide 24/7 emergency lockout services across Delhi NCR. Our mobile technicians can reach you quickly to help with lockouts, broken keys, or urgent lock repairs."
    },
    {
      question: "Which is better: biometric or keypad lock?",
      answer: "It depends on your needs. Biometric locks offer fast, secure access and are great for single-family use. Keypad locks are better for multiple users and can easily share access codes with family or staff."
    },
    {
      question: "Will the smart lock work if my phone is dead?",
      answer: "Yes! Most smart locks offer multiple backup entry methods including PIN codes, physical keys, or fingerprint access, so you're never locked out even if your phone battery dies."
    },
    {
      question: "How long do smart lock batteries last?",
      answer: "Typically 8-12 months depending on usage. Most smart locks give low battery warnings 30 days before the battery dies, and many have backup power options."
    },
    {
      question: "Can I monitor who enters and exits my property?",
      answer: "Yes! Smart locks maintain access logs showing who entered, when, and how (key, code, app, etc.). You can review this history through the mobile app anytime."
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
            Common questions about door locks and installation
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
