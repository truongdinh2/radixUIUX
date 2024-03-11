import * as React from 'react';
import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface GrandHimedicClubMemberProps extends React.HTMLAttributes<HTMLDivElement> {
  onSubmitHandler?: () => void;
  isLoading?: boolean;
}

export function GrandHimedicClubMember({
  onSubmitHandler,
  isLoading,
}: GrandHimedicClubMemberProps) {
  const { t } = useTranslation('registerMember');
  const [type, setType] = React.useState<string>();

  const onSubmit = async () => {
    if (onSubmitHandler) onSubmitHandler();
    console.log('type', type);
  };

  return (
    <div className="w-full mt-6">
      <form onSubmit={onSubmit}>
        <RadioGroup onValueChange={(value) => setType(value)} className="flex flex-col gap-0">
          <div>
            <div className="flex items-center gap-2 p-1.5">
              <RadioGroupItem value="hasID" id="hasID" />
              <Label className="font-normal fontsize-m text-black900" htmlFor="hasID">
                {t('Those who have a “HIMEDIC ID”')}
              </Label>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 p-1.5">
              <RadioGroupItem value="hasTransferCode" id="hasTransferCode" />
              <Label className="font-normal fontsize-m text-black900" htmlFor="hasTransferCode">
                {t('Those who have a “transfer code”')}
              </Label>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 p-1.5">
              <RadioGroupItem value="hasCertificationCode" id="hasCertificationCode" />
              <Label
                className="font-normal fontsize-m text-black900"
                htmlFor="hasCertificationCode"
              >
                {t('Those who have a “Result Report Certification Code”')}
              </Label>
            </div>
          </div>
        </RadioGroup>
        <div className="flex flex-col w-full mx-auto gap-4 pt-10 items-center">
          <Button
            disabled={isLoading}
            className="fontsize-m bg-primary900 hover:bg-primary900 w-[19.5rem]"
            type="submit"
          >
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            {t('A temporary password will be issued to your email address')}
          </Button>
          <span className="fontsize-s font-normal text-black700">
            {t('If authentication fails, please call')}
            <Link
              to="/"
              className={cn(buttonVariants({ variant: 'link' }), 'p-0 h-auto text-link fontsize-s')}
            >
              {t(' inquiry ')}
            </Link>
            {t('by phone')}
          </span>
        </div>
      </form>
    </div>
  );
}
