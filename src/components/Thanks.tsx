import { useTranslation } from 'react-i18next';

import { Icons } from './icons';

export function Thanks() {
  const { t } = useTranslation('account');
  return (
    <div className="w-full flex flex-col items-center justify-center sm:pt-[3.75rem]">
      <div className="flex flex-col items-center w-full mx-auto py-10 px-5 bg-white sm:p-10 sm:w-[35rem]">
        <p className="fontsize-l text-black900 font-medium">
          {t('New account registration has been completed')}
        </p>
        <Icons.thanks className="w-[20.875rem] h-[14.125rem] sm:w-[w-30rem] " />
        <p className="fontsize-s text-black900 font-normal">
          {t('Automatically transitions to the top screen')}
        </p>
        <p className="fontsize-s text-black900 font-normal">しばらくお待ちください。</p>
      </div>
    </div>
  );
}
