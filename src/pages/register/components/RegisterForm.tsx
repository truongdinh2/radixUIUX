import * as React from 'react';
import { TitleSeparator } from '@/components/TitleSeparator';
import { buttonVariants } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { GrandHimedicClubMember } from './GrandHimedicClubMember';
import { NonMember } from './NonMember';

interface RegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RegisterForm({ className, ...props }: RegisterFormProps) {
  const [type, setType] = React.useState<string>();
  const { t } = useTranslation('registerMember');

  return (
    <div
      className={cn(
        'grid gap-4 w-full bg-white py-10 px-5 sm:px-10 sm:mx-auto sm:w-auto lg:px-[10.625rem]',
        className,
      )}
      {...props}
    >
      <TitleSeparator
        title={t('Please select your membership type')}
        className="w-full sm:w-[35rem]"
      />
      <RadioGroup onValueChange={(value) => setType(value)} className="flex flex-col gap-0">
        <div>
          <div className="flex items-center gap-2 p-1.5">
            <RadioGroupItem value="clubMember" />
            <Label className="font-normal fontsize-m text-black900">
              {t('Grand Himedic Club Member')}
            </Label>
          </div>
          <span className="fontsize-xs font-normal text-red800 pl-8">
            {t('The contracted representative himself/herself')}
          </span>
        </div>
        <div>
          <div className="flex items-center gap-2 p-1.5">
            <RadioGroupItem value="nonMember" />
            <Label className="font-normal fontsize-m text-black900">
              {t('Non-members (other than members)')}
            </Label>
          </div>
          <span className="fontsize-xs font-normal text-red800 pl-8">
            {t('Everyone other than the above')}
          </span>
        </div>
      </RadioGroup>

      {type === 'clubMember' && <GrandHimedicClubMember />}
      {type === 'nonMember' && <NonMember />}

      <Link
        to="/"
        className={cn(
          buttonVariants({ variant: 'link' }),
          'text-link h-auto p-0 justify-start fontsize-m',
        )}
      >
        {t('Cancel')}
      </Link>
    </div>
  );
}
