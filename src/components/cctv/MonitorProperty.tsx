
import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { usePageCTA } from '@/hooks/useCMSContent';

export const MonitorProperty = () => {
  const { content } = usePageCTA('cctv');

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {content.title}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {content.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={content.primaryButton.link}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <MessageSquare className="h-5 w-5" />
            {content.primaryButton.text}
          </a>
          <a 
            href={content.secondaryButton.link}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            {content.secondaryButton.text}
          </a>
        </div>
      </div>
    </section>
  );
};
