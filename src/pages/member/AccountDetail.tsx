import MemberCard from '@/assets/img/member_card.png';
import { Icons } from '@/components/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function AccountDetail() {
  const { t } = useTranslation('accountSetting');
  return (
    <div className="w-full  bg-pcMain py-[2.5rem] text-black900 md:py-[3.75rem] font-normal ">
      <div className="mx-auto w-auto bg-pcMain  px-5 md:bg-white md:px-10 md:py-10 md:mx-10 lg:max-w-[56.25rem] lg:mx-auto">
        <Link to="/accounts">
          <div className="flex items-center gap-2">
            <Icons.iconBack />
            <span className="text-base font-bold leading-[1.2rem] ">{t('Return')}</span>
          </div>
        </Link>

        <h1 className="text-[1.75rem] font-bold leading-[2.1rem] border-l border-black900 pl-6 mt-4">
          {t('Smart membership card details')}
        </h1>

        <div className="flex flex-col mt-8 gap-10">
          <div className="flex gap-10 flex-col md:flex-row md:gap-10">
            <img
              src={MemberCard}
              alt="Member Card"
              className="w-[20.9375rem] h-[13.25rem] md:flex-[0_0_20.9375rem] mx-auto"
            />
            <div className="w-full">
              <div className="flex gap-4 border-b border-black300 py-3 fontsize-m">
                <p className="text-black700 flex-[0_0_6rem]">{t('Name/Corporation name')}</p>
                <p className="text-black900">{t('Name/Corporation name')}</p>
              </div>
              <div className="flex gap-4 border-b border-black300 py-3">
                <p className="text-black700 flex-[0_0_6rem]">{t('Membership card issue date')}</p>
                <p className="text-black900">2018/12/31</p>
              </div>
              <div className="flex gap-4 border-b border-black300 py-3">
                <p className="text-black700 flex-[0_0_6rem]">{t('Membership number')}</p>
                <p className="text-black900">HMC 26-4-1234-05-2</p>
              </div>
              <div className="flex gap-4 border-b border-black300 py-3 items-center">
                <p className="text-black700 flex-[0_0_6rem]">
                  {t('Home')}
                  <p>{t('Clinic')}</p>
                </p>
                <p className="text-black900">{t('Clinic')}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 fontsize-s font-normal text-black700">
            <p>{t('The information at the time of application is displayed.')}</p>
            <p>
              {t(
                'Please present your Grand HIMEDIC Club membership card (or this screen) and identification card at the time of reception.',
              )}
            </p>
            <p>{t('This application cannot be lent or transferred to a third party.')}</p>
            <p>
              {t(
                'If the device on which this application is installed is lost or damaged to the point that it cannot be used, please contact us immediately.',
              )}
            </p>
            <p>
              {t(
                'If you lose your membership, you will no longer be able to use some features of this app. Please note',
              )}
            </p>
            <p className="text-end">{t('Himedic Co., Ltd.')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
