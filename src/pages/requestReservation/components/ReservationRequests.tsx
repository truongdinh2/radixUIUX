import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { WEB_ROUTES } from '@/constants';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ReservationRequestsForm = () => {
  const { t } = useTranslation('healthChecklist');

  return (
    <div className="sm:container sm:p-10 bg-white">
      <Link to={WEB_ROUTES.HEALTH_CHECK_LIST_PAGE}>
        <div className="flex items-center cursor-pointer">
          <Icons.iconBack />
          <h1 className="text-base font-bold ml-2 text-black900">{t('Back')}</h1>
        </div>
      </Link>

      <div className="mt-8 flex flex-col gap-4 text-black900">
        <p className="fontsize-l">リ{t('We accept request reservations')}</p>

        <p className="fontsize-m">
          {t('It can only be used by the person receiving it. Please check the box below.')}
        </p>

        <div className="flex gap-2 px-1 py-1.5">
          <Checkbox className="translate-y-[2px]" />
          <span className="fontsize-m "> {t('I am the person undergoing the examination.')}</span>
        </div>

        <div className="w-full flex justify-center mt-5">
          <Button
            className="fontsize-m md:w-[11.25rem] w-[5rem] bg-primary hover:bg-primary"
            type="submit"
          >
            {t('to the next')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReservationRequestsForm;
