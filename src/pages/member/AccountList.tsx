import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import AccountCard from './components/AccountCard';

export default function AccountList() {
  const { t } = useTranslation('accountSetting');
  return (
    <div className="w-full h-full bg-pcMain pt-[2.5rem] text-black900 md:pt-[3.75rem]">
      <div className="mx-auto bg-pcMain max-w-[56.25rem] px-5 md:bg-white md:px-10 md:py-10">
        <h1 className="text-[1.75rem] font-bold leading-[2.1rem] border-l border-black900 pl-6">
          {t('Smart membership card list')}
        </h1>
        <div className="flex flex-col mt-8 gap-4">
          <p className="fontsize-m text-black900 font-medium">
            {t('Please select your membership number.')}
          </p>
          <Link to="/accounts/1">
            <AccountCard>
              <p className="fontsize-l font-medium text-black900">HMC 26-4-6284-10</p>
              <p className="fontsize-s font-normal text-black700">{t('Satoshi Genma')}</p>
            </AccountCard>
          </Link>
          <p className="fontsize-s font-normal text-black700">
            {t(
              'If you want to add a membership card to manage (applicable only to the new comprehensive course),',
            )}
            <Link
              to="/"
              className={cn(
                buttonVariants({ variant: 'link' }),
                'p-0 h-auto text-link fontsize-s font-normal',
              )}
            >
              {t('Contact Desk Club Desk')}
            </Link>
            {t('We accept orders at')}
          </p>
          <p className="fontsize-s font-normal text-black700">
            {t(
              'Please have the membership card number registered in the app and the new membership card number ready when you call us.',
            )}
          </p>
        </div>
        <Link to="/accounts/create" className="flex justify-center">
          <Button
            className="fontsize-m w-[11.25rem] bg-primary hover:bg-primary mt-10"
            type="button"
          >
            {t('Add membership card')}
          </Button>
        </Link>
      </div>
    </div>
  );
}
