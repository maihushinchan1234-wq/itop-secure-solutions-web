
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const CCTVFAQs = () => {
  const cctvFaqs = [
    {
      question: "How many CCTV cameras do I need for my shop?",
      answer: "Usually 2–4 cameras are enough: one for entry, one for the counter, one for storage, and one outdoor. We provide layout planning as well."
    },
    {
      question: "Can I access my CCTV feed on my phone?",
      answer: "Yes. All our systems support mobile viewing via dedicated Android and iOS apps."
    },
    {
      question: "What's better: wired or wireless cameras?",
      answer: "Wired systems are more reliable but take more time to install. Wireless systems are easy to set up but may depend on Wi-Fi quality."
    },
    {
      question: "How long can CCTV footage be stored?",
      answer: "Storage duration depends on your DVR/NVR capacity and recording quality. Typically ranges from 7 days to 3 months. Cloud storage options are also available."
    },
    {
      question: "Do CCTV cameras work in complete darkness?",
      answer: "Yes, cameras with infrared (IR) night vision can record in complete darkness up to specified distances, usually 20-100 meters depending on the model."
    },
    {
      question: "Can I upgrade my existing analog CCTV system?",
      answer: "Yes! We can upgrade your system to HD or IP cameras while utilizing existing cable infrastructure in most cases."
    },
    {
      question: "What's the difference between HD and IP cameras?",
      answer: "HD cameras provide high-definition video over coax cables, while IP cameras offer superior image quality, advanced features, and network connectivity but require more bandwidth."
    },
    {
      question: "Do I need internet for CCTV to work?",
      answer: "No, CCTV systems work independently. Internet is only needed for remote viewing on mobile devices or cloud storage features."
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            CCTV System FAQs
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about CCTV installation and surveillance systems
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {cctvFaqs.map((faq, index) => (
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
              Ready to Secure Your Property?
            </h3>
            <p className="text-gray-600 mb-6">
              Get a free security assessment and customized CCTV solution for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Free Assessment
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
