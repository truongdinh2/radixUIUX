import * as React from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface IFormInput {
  password: string;
  passwordConfirm: string;
}
interface ChangPasswordForm extends React.HTMLAttributes<HTMLDivElement> {
  onSubmitHandler: (data: IFormInput) => void;
}

export function ChangPasswordForm({ className, onSubmitHandler, ...props }: ChangPasswordForm) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { t } = useTranslation('account');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    onSubmitHandler(data);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div
      className={cn(
        'grid gap-4 w-full mx-auto py-10 px-5 bg-white sm:p-10 sm:w-[35rem]',
        className,
      )}
      {...props}
    >
      <p className="fontsize-l font-medium text-black900">{t('Please set a new password')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid">
            <Label htmlFor="password" className="fontsize-s font-medium text-black900">
              {t('Password')}
            </Label>
            <Input
              id="password"
              placeholder={t('Please enter')}
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              {...register('password', { required: 'メールアドレス required' })}
              error={errors?.password?.message}
              className="border-black400 bg-form"
            />
            <p className="fontsize-xs font-normal text-black700">
              {t('Half width alphanumeric symbols')}
            </p>
          </div>
          <p className="fontsize-s font-normal text-black700">
            {t(
              'Please use at least three types of passwords: English letters (uppercase and lowercase), numbers, and symbols.',
            )}
          </p>
          <div className="grid">
            <Label htmlFor="passwordConfirm" className="fontsize-s font-medium text-black900">
              {t('Password Confirm')}
            </Label>
            <Input
              id="passwordConfirm"
              placeholder={t('Please enter')}
              type="password"
              autoComplete="passwordConfirm"
              autoCorrect="off"
              disabled={isLoading}
              {...register('passwordConfirm', { required: '入力してください required' })}
              error={errors?.passwordConfirm?.message}
              className="border-black400 bg-form"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-col w-full mx-auto gap-2.5 mt-10">
          <Button
            disabled={isLoading}
            className="fontsize-m w-full bg-primary900 hover:bg-primary900"
            type="submit"
          >
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            {t('Next')}
          </Button>
        </div>
      </form>
    </div>
  );
}
