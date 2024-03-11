import { useState } from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useTranslation } from 'react-i18next';

export default function Policy() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation('account');

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center sm:pt-[3.75rem]">
        <div className="flex flex-col gap-10 w-full mx-auto py-10 px-5 bg-white sm:p-10 sm:w-[35rem]">
          <Icons.logoSmart
            color="var(--base700)"
            className="h-[4.8125rem] w-[12.5rem] mt-[3.25rem] mb-8 mx-auto sm:mb-0 sm:h-[4.625rem] sm:w-48 sm:mt-5"
          />
          <div className="flex flex-col gap-4">
            <p className="font-normal text-black900 fontsize-m">
              {t(
                'Please check the checkbox after checking the terms of use and regulations regarding the handling of personal information',
              )}
            </p>
            <div className="flex flex-col">
              <div className="flex gap-2 px-1 py-1.5">
                <Checkbox className="translate-y-[2px]" />
                <span className="fontsize-m font-normal text-link">
                  {t('I agree with ')}
                  <span className="text-black900">{t('terms of Service')}</span>
                </span>
              </div>
              <div className="flex gap-2 px-1 py-1.5">
                <Checkbox className="translate-y-[2px]" />
                <span className="fontsize-m font-normal text-link">
                  {t('I agree ')}
                  <span className="text-black900">
                    {t('regulations regarding the handling of personal information')}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <Button
            disabled={isLoading}
            className="fontsize-m w-full bg-primary hover:bg-primary"
            onClick={handleSubmit}
          >
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            {t('Next')}
          </Button>
        </div>
      </div>
    </>
  );
}
