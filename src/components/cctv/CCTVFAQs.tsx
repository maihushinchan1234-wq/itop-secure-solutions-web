
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { usePageFAQs } from '@/hooks/useCMSContent';

export const CCTVFAQs = () => {
  const { content } = usePageFAQs('cctv');

  // Handle both flat faqs array and categorized faqs
  const faqs = content.faqs || (content.categories?.[0]?.faqs) || [];

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600">
            {content.sectionDescription}
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
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {content.ctaTitle}
            </h3>
            <p className="text-gray-600 mb-6">
              {content.ctaDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {content.ctaButtons.map((button, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    if (button.action.startsWith('http')) {
                      window.open(button.action, '_blank');
                    } else {
                      window.location.href = button.action;
                    }
                  }}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    button.variant === 'primary' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
