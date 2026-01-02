
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { usePageFAQs } from '@/hooks/useCMSContent';

export const FireAlarmsFAQs = () => {
  const { content } = usePageFAQs('firealarms');

  const handleCTAClick = (action: string) => {
    if (action === 'contact') {
      window.location.href = '/#contact';
    } else if (action === 'whatsapp') {
      window.open('https://wa.me/919990820830', '_blank');
    }
  };

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.sectionDescription}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-6">
            {content.faqs?.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-800 text-left leading-relaxed pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Enhanced Fire Safety Information */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Complete Fire Safety Solutions
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                <h4 className="text-lg font-semibold text-red-700 mb-4">Detection Systems</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Smoke, heat, and flame detectors</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Addressable fire alarm panels</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Manual call points and sirens</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-orange-100">
                <h4 className="text-lg font-semibold text-orange-700 mb-4">Professional Services</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Fire safety audits and assessments</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Code-compliant installations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Annual maintenance contracts</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-100">
                <h4 className="text-lg font-semibold text-yellow-700 mb-4">Emergency Response</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">24/7 monitoring services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Automatic fire department alerts</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Mobile app notifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-red-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {content.ctaTitle}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              {content.ctaDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {content.ctaButtons?.map((button, index) => (
                <button 
                  key={index}
                  onClick={() => handleCTAClick(button.action)}
                  className={`px-8 py-3 rounded-lg transition-colors font-semibold ${
                    button.variant === 'primary' 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
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
