import icon_map from '@/assets/icon_map.svg';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface ReservationConfirmedForm extends React.HTMLAttributes<HTMLDivElement> {
  onCancelHandler: () => void;
  onSubmitHandler: () => void;
}

export const ReservationConfirmed = ({
  onSubmitHandler,
  onCancelHandler,
}: ReservationConfirmedForm) => {
  const { t } = useTranslation('healthChecklist');

  return (
    <div className="sm:container sm:px-10 bg-white pt-5">
      <h1 className="text-lg bg-base900 text-white border-black900 text-center py-2 font-semibold tracking-tight">
        {t('Reservation confirmed')}
      </h1>
      <div className="p-3 sm:px-0 sm:py-1.5 bg-black100 relative">
        <div className="flex flex-col w-full">
          {/* need loop in the future */}
          <div className="flex flex-col sm:p-3.5 sm:px-5 gap-2 relative items-center">
            {/* to do check visible/invisible with multiple case */}
            <button className="bg-primary900 text-sm text-white leading-[22.4px] py-3 px-5 rounded">
              {t('Interview/consent')} <br />
              {t('Input period')}: 2022/12/22~2032/12/01
            </button>
            <span className="self-start py-3 text-black900">
              {t(
                'The reception facility will change between the first and second time. please note',
              )}
            </span>
            <div className="flex flex-col bg-white p-5 sm:p-3.5 sm:px-5 relative w-full items-start">
              <h2 className="font-medium text-black900 text-lg leading-[28.8px]">1回目</h2>
              <div className="h-[1px] w-full bg-lineBackground relative mt-[6px] mb-[20px]">
                <div className="h-[1px] w-1/2 bg-lineForeground opacity-60 absolute top-0 left-0"></div>
              </div>
              <div className="gap-y-4 flex flex-col items-start font-medium text-black900">
                <p className="font-medium">慶應義塾大学病院 HM東京日本橋コース</p>
                <p className="flex flex-col sm:flex-row">
                  <span className="font-normal w-[115px]">
                    [{t('Scheduled date of consultation')}]
                    <br />
                  </span>{' '}
                  <p className="flex flex-col">2032/12/01 受付時間08:35</p>
                </p>
                <p className="flex flex-col sm:flex-row">
                  <span className="font-normal w-[115px]">
                    [{t('Consultation facility')}]
                    <br />
                  </span>{' '}
                  <p className="flex flex-col flex-1">
                    慶應義塾大学病院 〒160-8582 東京都新宿区信濃町35(予防医療センター内)
                    <Button className="w-[118px] mt-4 h-[34px] bg-blue300 py-1.5 border-primary">
                      <img src={icon_map} alt="icon map" />
                      <span className="text-white text-sm font-medium">Google Map</span>
                    </Button>
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:p-3.5 sm:pt-1.5 sm:px-5 relative items-start">
            <div className="flex items-center text-base justify-items-center mt-5 sm:mt-0">
              <span className="bg-dusty_plum text-white py-1 w-[112px] text-center">
                {t('Accommodation')}
              </span>
              <span className="ml-3 text-black900">なし</span>
            </div>
            <div className="flex items-center text-base justify-items-center mt-3">
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
          </div>
          <div className="flex flex-col items-center w-full mt-5 sm:pb-5 sm:px-5">
            <div className="flex flex-row gap-x-3 items-center">
              <Button
                className="w-[150px] shadow-gray-00 py-3 border-primary"
                onClick={onCancelHandler}
              >
                <span className="text-primary text-base font-medium">
                  {t('Cancel reservation')}
                </span>
              </Button>

              <Button className="w-[150px] py-3 shadow-gray-00" onClick={onSubmitHandler}>
                <span className="text-base font-medium">{t('Change reservation date')}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
