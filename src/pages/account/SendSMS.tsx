import { useState } from 'react';
import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface IFormInput {
  tel: string;
}

export default function SendSMS() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation('account');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center sm:pt-[3.75rem]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-10 w-full mx-auto py-10 px-5 bg-white sm:p-10 sm:w-[35rem] items-start">
            <div className="flex flex-col gap-4">
              <p className="font-normal text-black900 fontsize-m">
                {t(
                  'SMS authentication is required to confirm your identity. Please enter a valid mobile phone number',
                )}
              </p>
              <div className="grid">
                <Label htmlFor="tel" className="fontsize-s font-medium text-black900">
                  {t('Please enter your mobile phone number')}
                </Label>
                <Input
                  id="tel"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                  className="border-black400 bg-form"
                  {...register('tel', { required: 'メールアドレス required' })}
                  error={errors?.tel?.message}
                />
                <p className="fontsize-xs font-normal text-black700">
                  {t('Please enter your mobile phone number without hyphens (-)')}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <Button
                disabled={isLoading}
                className="fontsize-m w-full bg-primary hover:bg-primary"
                type="submit"
              >
                {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                {t('Send SMS')}
              </Button>
              <p className="fontsize-xs font-normal text-red800">
                {t(
                  'Press the button and an SMS will be sent to your phone number. Please be careful not to make any mistakes when entering the number',
                )}
              </p>
            </div>
            <Link
              to="/auth/policy"
              className={cn(
                buttonVariants({ variant: 'link' }),
                'p-0 text-link h-auto fontsize-m font-normal -mt-5 items-start',
              )}
            >
              &lt; {t('Back')}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
