import * as React from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface IFormInput {
  email: string;
  answer: string;
}
interface ForgotPasswordForm extends React.HTMLAttributes<HTMLDivElement> {
  onSubmitHandler: (data: IFormInput) => void;
}

export function ForgotPasswordForm({ className, onSubmitHandler, ...props }: ForgotPasswordForm) {
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
          'Please enter the email address and secret question and answer you set during user registration',
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
              placeholder="sample@sample.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register('email', { required: 'メールアドレス required' })}
              error={errors?.email?.message}
              className="border-black400 bg-form"
            />
            <p className="fontsize-s font-normal text-black700">
              {t('Half width alphanumeric symbols')}
            </p>
          </div>
          <div className="grid">
            <Label htmlFor="question" className="fontsize-s font-medium text-black900 ">
              {t('Security Question')}
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">
                  <span className="text-black900">{t('Please select')}</span>
                </SelectItem>
                <SelectItem value="pro">
                  <span className="text-black900">{t('Please select')}</span>
                </SelectItem>
              </SelectContent>
            </Select>
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
              className="border-black400 bg-form"
            />
          </div>
        </div>
        <div className="flex flex-col w-full mx-auto gap-2.5 mt-10">
          <Button
            disabled={isLoading}
            className="fontsize-m w-full bg-primary900 hover:bg-primary900"
            type="submit"
          >
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            {t('A temporary password will be issued to your email address')}
          </Button>
          <p className="fontsize-s font-normal text-black700">
            {t('If you are unable to have your temporary password reissued, please')}
            <Link to="/auth/forgot-password" className={cn('p-0 h-auto text-link')}>
              {t('contact us')}
            </Link>
            {t('by phone')}
          </p>
          <Link
            to="/auth/login"
            className={cn('p-0 text-link h-auto fontsize-s font-normal flex-center')}
          >
            {t('Login Screen')}
          </Link>
        </div>
      </form>
    </div>
  );
}
