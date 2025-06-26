
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const PrinterFAQs = () => {
  const faqs = [
    {
      question: "Do you provide on-site printer repairs?",
      answer: "Yes, we offer same-day on-site support in most areas across Delhi NCR. Our certified technicians can diagnose and repair most printer issues at your location, saving you time and hassle."
    },
    {
      question: "What types of printers do you sell?",
      answer: "We sell a wide range of printers including inkjet, laser, and multifunction printers from top brands like HP, Canon, Epson, Brother, and more. We also offer refurbished printers for budget-conscious customers."
    },
    {
      question: "Can I get a printer on rent for a short-term project?",
      answer: "Absolutely! We offer flexible leasing options from 1 week to 1 year. Our rental plans include maintenance and technical support, making it perfect for events, temporary projects, or seasonal business needs."
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

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
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
