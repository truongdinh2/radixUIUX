import { useState } from 'react';
import arrow from '@/assets/icon_arrow_right.svg';
import icon_map from '@/assets/icon_map.svg';
import noti from '@/assets/icon_noti.svg';
import icon_report from '@/assets/icon_report.svg';
import icon_time from '@/assets/icon_time.svg';
import logo from '@/assets/logo_smarthimedic_vertical.svg';
import { Button } from '@/components/ui/button';
import { WEB_ROUTES } from '@/constants';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const TopPage = () => {
  const [isReport, setIsReport] = useState<boolean>(false);
  const navigate = useNavigate();
  const redirectToHealthChecklist = () => {
    navigate(WEB_ROUTES.SELECT_MEMBERS, { replace: true });
  };
  const onClickReportButton = () => {
    if (isReport) redirectToHealthChecklist();
    setIsReport(true);
  };
  const { t } = useTranslation('topPage');
  return (
    <section className="text-sm sm:text-base">
      <div className="p-3 px-4 bg-gray80 sm:mb-[2.875rem]">
        山田太郎 様<span className="fontsize-xs">：ハイメディック東京日本橋</span>
      </div>
      <div className="sm:container mb-20">
        <div className="sm:bg-top-page bg-top-page-sm bg-cover bg-center h-[38.4375rem] sm:h-[28.4375rem] flex justify-center relative">
          <div className="flex mb-24 sm:mb-28">
            <img src={logo} alt="logo" className="w-[12.5rem]" />
          </div>
          <div
            className={cn(
              'absolute sm:top-[20rem] top-[28.5rem] flex flex-col gap-2.5 w-[95%] sm:w-[71%]',
              isReport ? '' : 'sm:top-[22rem]',
            )}
          >
            <div className="flex bg-white p-2.5 px-3 sm:p-3.5 sm:px-5 gap-2 relative items-center rounded-sm">
              <img className="self-start mt-0.5" src={noti} alt="noti" />
              <span className="pr-4">
                {t('You are requesting a reservation. Please wait for a while until confirmation')}
              </span>
              <img className="absolute right-3 sm:right-5" src={arrow} alt="arrow" />
            </div>
            <div
              className={cn(
                'flex justify-between border-l-4 border-l-base900 shadow-gray-00',
                isReport && 'flex-col sm:flex-row',
              )}
            >
              {isReport && (
                <div className="flex flex-wrap bg-white gap-3 sm:gap-1.5 p-3 px-4 flex-1 basis-2/4 sm:basis-3/4 cursor-pointer">
                  <Report />
                </div>
              )}
              <div
                className={cn(
                  'bg-brown300 flex-center gap-2 sm:gap-4 p-4 sm:p-3 text-sm text-center flex-1 basis-2/4  border-r border-black_3b sm:flex-row sm:basis-1/2 sm:text-left cursor-pointer',

                  isReport
                    ? 'flex-row gap-4 sm:gap-2 sm:basis-1/4 sm:flex-col sm:text-center'
                    : 'flex-col ',
                  '!justify-start',
                )}
                onClick={onClickReportButton}
              >
                <div
                  className={cn(
                    'sm:border-r sm:border-black_3b80  sm:pr-4',
                    isReport ? 'border-none' : '',
                  )}
                >
                  <img
                    className={cn('sm:w-[66px]', isReport && 'sm:w-[47px]')}
                    src={icon_time}
                    alt="icon_time"
                  />
                </div>
                <div className="sm:flex-1 font-bold text-white">
                  {t('Consultation rights information')}
                  <span className={cn(isReport ? 'inline sm:block' : 'block', 'pl-2 sm:pl-0')}>
                    {t('request reservation/change')}
                  </span>
                </div>
              </div>
              {!isReport && (
                <div className="flex bg-brown300 font-bold text-white w-full items-center  gap-4 flex-col sm:flex-row p-4 flex-1 basis-2/4 sm:basis-1/2 justify-start cursor-pointer">
                  <div
                    className={cn(
                      'sm:p-1 sm:px-4 sm:border-r sm:border-black_3b80',
                      isReport ? 'border-none' : '',
                    )}
                  >
                    <img src={icon_report} alt="icon_report" />
                  </div>
                  <span>{t('Results report')}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Report() {
  return (
    <>
      <div className="flex justify-between sm:justify-start items-center w-full ">
        <div className="text-xs sm:text-sm">
          ハイメディック・ミッドタウン
          <br />
          HM・ミッドタウンコース（1回目：ミッドタウン）
        </div>
        <Button
          variant={'ggMap'}
          className="text-white flex flex-col sm:flex-row sm:h-[2.25rem] sm:p-2"
        >
          <img className="mr-0.5" src={icon_map} alt="icon_map" />
          MAP
        </Button>
      </div>
      <div className="flex w-full">
        <div className="p-3 flex-1 sm:flex-none sm:p-4 text-xxs sm:text-xs border-gray_d7 flex-center h-[3.125rem] border fontsize-xs text-white bg-black_4d">
          受診
        </div>
        <div className="p-3 flex-1  sm:flex-none sm:p-4 border-gray_d7 flex-center h-[3.125rem] border border-l-0    text-base sm:text-xl text-black_6a font-bold">
          ks 2024
        </div>
        <div className="p-3 flex-1  sm:flex-none sm:p-4 border-gray_d7 flex-center h-[3.125rem] border border-l-0 text-xl sm:text-3xl text-black_6a font-bold">
          12
        </div>
        <div className="p-3 flex-1  sm:flex-none sm:p-4 border-gray_d7 flex-center h-[3.125rem] border border-l-0 text-xl sm:text-3xl text-yellow_e1 font-bold">
          21 <span className="text-sm mt-1.5">WED</span>
        </div>
        <div className="p-3 flex-1  sm:flex-none sm:p-4 border-gray_d7 flex-center h-[3.125rem] border border-l-0 text-xl sm:text-3xl text-black_6a font-bold">
          12:30
        </div>
      </div>
    </>
  );
}
