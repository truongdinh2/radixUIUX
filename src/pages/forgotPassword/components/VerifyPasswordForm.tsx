import * as React from 'react';
import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface IFormInput {
  email: string;
  answer: string;
}
interface VerifyPasswordForm extends React.HTMLAttributes<HTMLDivElement> {
  onSubmitHandler: (data: IFormInput) => void;
}

export function VerifyPasswordForm({ className, onSubmitHandler, ...props }: VerifyPasswordForm) {
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
      <p className="fontsize-l font-medium text-black900">
        {t(
          'A temporary password has been sent to your email address. Please enter your temporary password',
        )}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid">
            <Label htmlFor="email" className="fontsize-s font-medium text-black900">
              {t('Email')}
            </Label>
            <Input
              id="email"
              placeholder="matsuura@pivot.jp"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register('email', { required: 'メールアドレス required' })}
              error={errors?.email?.message}
              className="rounded-none border-black400 bg-form"
            />
          </div>
          <div className="grid">
            <Label htmlFor="answer" className="fontsize-s font-medium text-black900">
              {t('Answer to the secret question')}
            </Label>
            <Input
              id="answer"
              placeholder={t('Please enter')}
              type="text"
              autoComplete="answer"
              autoCorrect="off"
              disabled={isLoading}
              {...register('answer', { required: '入力してください required' })}
              error={errors?.email?.message}
              className="rounded-none border-black400 bg-form"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-col w-full mx-auto gap-2.5 mt-10">
          <p className="fontsize-xs font-normal">
            <p>
              {t('If you cannot receive your temporary password, please ')}
              <Link
                to="/auth/forgot-password"
                className={cn(buttonVariants({ variant: 'link' }), 'p-0 h-auto text-link')}
              >
                {t('contact us')}
              </Link>
              {t('by phone')}
            </p>
            <p>
              {t('If your temporary password has expired, ')}
              <Link
                to="/auth/forgot-password"
                className={cn(buttonVariants({ variant: 'link' }), 'p-0 h-auto text-link')}
              >
                {t('Please click here ')}
              </Link>
              {t('to reissue a temporary password.')}
            </p>
          </p>
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
