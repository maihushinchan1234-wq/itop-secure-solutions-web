
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const PrinterFAQs = () => {
  const generalFaqs = [
    {
      question: "What areas do you serve?",
      answer: "We provide services across Delhi and NCR. You can contact us to check availability in your specific area."
    },
    {
      question: "Do you provide emergency or same-day services?",
      answer: "Yes, we offer same-day support for urgent installations, breakdowns, or safety issues."
    },
    {
      question: "Are your staff and technicians certified?",
      answer: "Yes. Our team is professionally trained, background-verified, and equipped with all necessary tools and certifications."
    }
  ];

  const printerFaqs = [
    {
      question: "Do you repair all brands of printers?",
      answer: "Yes. We repair HP, Canon, Epson, Brother, Samsung, Pantum, and more. We handle all issues from hardware to cartridge problems."
    },
    {
      question: "Can I rent a printer for short-term use?",
      answer: "Yes. We offer flexible daily/weekly/monthly printer rental options for events, exams, and offices."
    },
    {
      question: "How much time does a repair take?",
      answer: "Most repairs are completed within 24 hours. Complex issues may take longer, but we keep you informed at each step."
    },
    {
      question: "Do you provide genuine toner and ink cartridges?",
      answer: "Yes, we supply both genuine OEM cartridges and high-quality compatible alternatives. We offer competitive pricing and bulk discounts for businesses with regular supply contracts."
    },
    {
      question: "What's included in your AMC plans?",
      answer: "Our Annual Maintenance Contracts include regular preventive maintenance, priority support, genuine parts replacement, and emergency repairs. We offer different tiers to match your specific needs and budget."
    },
    {
      question: "How quickly can you respond to emergency repair calls?",
      answer: "We provide 24/7 emergency support with response times typically within 4-6 hours for critical business environments. Our technicians carry common parts and tools for immediate repairs."
    },
    {
      question: "Do you offer training for printer operation and maintenance?",
      answer: "Yes, we provide comprehensive training for your staff on printer operation, basic troubleshooting, and maintenance. This helps prevent common issues and extends the life of your equipment."
    },
    {
      question: "Can you help with printer network setup and configuration?",
      answer: "Absolutely! We specialize in network printer setup, including WiFi configuration, driver installation, and user access management. We ensure seamless integration with your existing IT infrastructure."
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our printer services and solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* General FAQs */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">General Questions</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {generalFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`general-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Printer FAQs */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Printer Services</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {printerFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`printer-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need Help with Your Printer?
            </h3>
            <p className="text-gray-600 mb-6">
              Our expert technicians are ready to help with any printer-related questions or issues.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Support
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
