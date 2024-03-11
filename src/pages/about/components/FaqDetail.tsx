import React from 'react';
import { Icons } from '@/components/icons';
import { useTranslation } from 'react-i18next';

export interface FAQ {
  question: string;
  answerList: FAQItem[];
}

export interface FAQItem {
  id: number;
  title: string;
  description: string;
}

interface FAQDetailProps {
  faqs: FAQ[];
  currentIdFaq: number;
  onShowDetailFaq: (id: number | null) => void;
}

const FaqDetail: React.FC<FAQDetailProps> = ({ faqs, currentIdFaq, onShowDetailFaq }) => {
  const { t } = useTranslation('about');

  return (
    <div className="sm:container sm:px-10 sm:py-10 bg-white">
      <div onClick={() => onShowDetailFaq(null)} className="flex items-center cursor-pointer">
        <Icons.iconBack />
        <h1 className="text-base font-bold ml-2 text-black900">{t('Back')}</h1>
      </div>
      <h1 className="text-xxl text-black900 border-black900 mt-4 pl-6 mb-8 border border-y-0 border-r-0 font-bold tracking-tight">
        {t('Frequently asked questions')}
      </h1>
      <div className="relative">
        <p className="text-base text-black900">
          {
            faqs.filter((faq) => faq.answerList.some((answer) => answer.id === currentIdFaq))[0]
              .answerList[0].description
          }
        </p>
      </div>
    </div>
  );
};

export default FaqDetail;
