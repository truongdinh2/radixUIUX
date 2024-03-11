import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export const RequestingExamination = () => {
  const { t } = useTranslation('healthChecklist');
  return (
    <div className="sm:container sm:px-10 bg-white pt-5">
      <h1 className="text-lg bg-base900 text-white border-black900 text-center py-2 font-semibold tracking-tight">
        {t('Request reservation in progress')}
      </h1>
      <div className="p-3 sm:px-0 sm:py-1.5 bg-black100 relative">
        <div className="flex flex-col w-full">
          <div className="flex flex-col sm:p-3.5 sm:px-5 relative items-start">
            <div className="flex items-center text-base justify-items-center">
              <span className="bg-dusty_plum text-white py-1 w-[112px] text-center">
                {t('Consultation right number')}
              </span>
              <span className="ml-3 text-black900">123456789</span>
            </div>
            <div className="flex items-center text-base justify-items-center mt-3">
              <span className="bg-dusty_plum text-white py-1 w-[112px] text-center">
                {t('Membership number')}
              </span>
              <span className="ml-3 text-black900">26-4-1234-05-2</span>
            </div>
            <div className="flex items-center text-base justify-items-center mt-3">
              <span className="bg-dusty_plum text-white py-1 w-[112px] text-center">
                {t('Date of expiry')}
              </span>
              <span className="ml-3 text-black900">2018/08/01~2018/08/31</span>
            </div>
            <div className="flex items-center text-base justify-items-center mt-3">
              <span className="bg-dusty_plum text-white py-1 w-[112px] text-center">
                {t('Occupancy day period')}
              </span>
              <span className="ml-3 text-black900">2018/08/01~2018/08/31</span>
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-5 sm:mt-0 sm:p-3.5 sm:pt-1.5 sm:px-5">
            <div className="flex flex-row gap-x-3 items-center">
              <Button className="w-[150px] shadow-gray-00 py-3 border-primary">
                <span className="text-primary text-base font-medium">
                  {t('Cancel reservation')}
                </span>
              </Button>
              <Button className="w-[150px] py-3 shadow-gray-00">
                <span className="text-base font-medium">{t('Change reservation date')}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
