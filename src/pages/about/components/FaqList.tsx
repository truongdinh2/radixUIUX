import React from 'react';
import arrowRight from '@/assets/icon_black_arrow_right.svg';
import { AccordionCustomTrigger } from '@/components/ui/accordion';
import { Accordion, AccordionContent, AccordionItem } from '@radix-ui/react-accordion';
import { useTranslation } from 'react-i18next';

import { FAQ } from './FaqDetail';

interface FAQListProps {
  faqs: FAQ[];
  onShowDetailFaq: (id: number) => void;
}

const FaqList: React.FC<FAQListProps> = ({ faqs, onShowDetailFaq }) => {
  const { t } = useTranslation('about');

  return (
    <div className="sm:container sm:px-10 sm:py-10 bg-white">
      <h1 className="text-xxl text-black900 border-black900 pl-6 mb-8 border border-y-0 border-r-0 font-bold tracking-tight">
        {t('Frequently asked questions')}
      </h1>
      <div className="relative">
        <div className="pb-8">
          <p className="text-base text-black900">
            電話番号 <span className="pl-4 text-link">0120-272-288</span>
          </p>
          <p className="text-base text-black900">
            受付時間 <span className="pl-4">月〜土曜日 9時〜17時 ※日曜日・祝日は除く</span>
          </p>
        </div>
        <div className="shadow-gray-00 rounded">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem value={`item${index}`}>
                <AccordionCustomTrigger className="px-4 hover:bg-[#F6F6F6] hover:no-underline ">
                  <span className="text-black900 font-medium">{faq.question}</span>
                </AccordionCustomTrigger>
                {faq.answerList.map((answer, index) => (
                  <AccordionContent key={index} className="px-6 py-4 border-t">
                    <div
                      onClick={() => onShowDetailFaq(answer.id)}
                      className="flex cursor-pointer flex-row items-center justify-between"
                    >
                      {answer.title}
                      <img src={arrowRight} alt="arrow" />
                    </div>
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqList;
