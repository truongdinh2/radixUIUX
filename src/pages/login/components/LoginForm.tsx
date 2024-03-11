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
  password: string;
}
interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onSubmitHandler: (data: IFormInput) => void;
}

export function LoginForm({ className, onSubmitHandler, ...props }: LoginFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { t } = useTranslation('login');
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
    <div className={cn('grid gap-10', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-5">
          <div className="grid">
            <Label htmlFor="email" className="sr-only">
              {t('Email')}
            </Label>
            <Input
              id="email"
              placeholder={t('Email')}
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register('email', { required: 'メールアドレス required' })}
              error={errors?.email?.message}
              className="text-base rounded-md"
            />
          </div>
          <div className="grid">
            <Label htmlFor="password" className="sr-only">
              {t('Password')}
            </Label>
            <Input
              id="password"
              placeholder={t('Password')}
              type="password"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              {...register('password', { required: '入力してください required' })}
              error={errors?.email?.message}
              className="text-base rounded-md"
            />
          </div>
          <div className="flex flex-col w-full mx-auto gap-3">
            <Button
              disabled={isLoading}
              className="fontsize-m w-full bg-primary900 hover:bg-primary900"
              type="submit"
            >
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              {t('Login')}
            </Button>
            <Link
              to="/auth/forgot-password"
              className={cn(
                buttonVariants({ variant: 'link' }),
                'p-0 text-white h-auto fontsize-xs font-normal',
              )}
            >
              {t('Forgot Password')}
            </Link>
          </div>
        </div>
      </form>

      <div className="flex flex-col items-center gap-2">
        <Link to="/auth/policy">
          <Button
            disabled={isLoading}
            className="h-[2.125rem] w-[9.375rem] border border-white bg-inherit fontsize-s hover:bg-transparent"
          >
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            {t('Sign Up')}
          </Button>
        </Link>
        <Link
          to="/register"
          className={cn(
            buttonVariants({ variant: 'link' }),
            'p-0 text-white h-auto fontsize-xs font-normal',
          )}
        >
          {t('FAQs')}
        </Link>
      </div>
    </div>
  );
}
