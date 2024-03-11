import logo_smarthimedic_horizon from '@/assets/logo_smarthimedic_horizon.svg';
import logo from '@/assets/logo_smarthimedic_vertical.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export function SiteFooter() {
  const { user } = useAuth();
  const { t } = useTranslation('footer');
  return (
    <div className="">
      {user && (
        <div className="bg-base900 text-white flex gap-4 flex-col pl-5 pb-10 sm:flex-row sm:flex-wrap sm:justify-center">
          <Link
            to={'/'}
            className="flex mt-10 sm:mt-10 mb-3 sm:justify-center sm:flex-1 sm:basis-full sm:mb-5"
          >
            <img src={logo} alt="logo" className="w-[12.5rem] hidden sm:block sm:w-[153px]" />
            <img
              src={logo_smarthimedic_horizon}
              alt="logo_smarthimedic_horizon"
              className="w-[12.5rem] block sm:hidden"
            />
          </Link>
          <Link to="/terms-of-service" className="text-sm sm:m-4 sm:my-0">
            {t('Terms of Service')}
          </Link>
          <Link to="/policy" className="text-sm sm:m-4 sm:my-0">
            {t('Regulations regarding the handling of personal information')}
          </Link>
          <Link to="/" className="text-sm sm:m-4 sm:my-0">
            {t('License')}
          </Link>
          <Link to="/faqs" className="text-sm sm:m-4 sm:my-0">
            {t('Frequently asked questions')}
          </Link>
        </div>
      )}
      <div className="bottom-0 z-40 w-full bg-base900">
        <div className="container-fluid px-5 py-4 flex items-center gap-4 justify-center">
          <span className="font-normal fontsize-xxs text-onDarkLight">
            © 2023 HIMEDIC.Inc ALL Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
}
