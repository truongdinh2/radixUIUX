import { useTranslation } from 'react-i18next';

export const InProgressExamination = () => {
  const { t } = useTranslation('healthChecklist');
  return (
    <div className="sm:container sm:px-10 bg-white pt-5">
      <h1 className="text-lg bg-base900 text-white border-black900 text-center py-2 font-semibold tracking-tight">
        {t('In process')}
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
        </div>
      </div>
    </div>
  );
};
