import { useState } from 'react';
import { Icons } from '@/components/icons';
import { TitleSeparator } from '@/components/TitleSeparator';
import { Button, buttonVariants } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import { registerMemberSchema } from '../data/schema';
import { OTPCode } from './OTPCode';

interface NonMemberProps extends React.HTMLAttributes<HTMLDivElement> {
  onSubmitHandler?: (event: any) => void;
}

export function NonMember({ onSubmitHandler }: NonMemberProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation('registerMember');
  const [certificateCode, setCertificateCode] = useState(['', '', '', '', '', '', '', '']);
  const [inputValues, setInputValues] = useState(['', '', '', '', '', '', '', '']);
  const { schema } = registerMemberSchema();

  const defaultValues: Partial<RegisterMember> = {};
  type RegisterMember = z.infer<typeof schema>;
  const form = useForm<RegisterMember>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data: RegisterMember) => {
    setIsLoading(true);
    if (onSubmitHandler) onSubmitHandler(data);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-1 font-normal">
        <div className="grid gap-10 mt-6 w-full sm:w-[35rem]">
          {/* MemberID */}
          <div className="grid gap-4">
            <TitleSeparator title={t('Please enter your Grand HIMEDIC Club member number')} />
            <FormField
              control={form.control}
              name="memberID"
              render={({ field }) => (
                <>
                  <div className="mt-1">
                    <FormItem className="flex items-center space-y-0 gap-2">
                      <FormLabel className="fontsize-m text-black900">HMC</FormLabel>
                      <FormControl>
                        <Input placeholder="26-4-1234-05-2" {...field} />
                      </FormControl>
                    </FormItem>
                    <FormDescription className="ml-10 fontsize-xs text-black700">
                      {t('Please enter the half-width digit “-”')}
                    </FormDescription>
                    <FormMessage className="ml-10 fontsize-xs" />
                  </div>
                  <div className="fontsize-s text-black700">
                    <p>{t('If you have multiple membership numbers, please enter one of them.')}</p>
                    <p>
                      {t(
                        'After registering with the membership number you entered, you can add other membership numbers.',
                      )}
                    </p>
                    <p className="mt-5">
                      {t('If you do not know your member number, please call')}
                      <Link
                        to="/"
                        className={cn(buttonVariants({ variant: 'link' }), 'p-0 h-auto text-link')}
                      >
                        {t(' inquiry ')}
                      </Link>
                      {t('by phone')}
                    </p>
                  </div>
                </>
              )}
            />
          </div>

          {/* HimedicID */}
          <div className="grid gap-4">
            <TitleSeparator title={t('Please enter your HIMEDIC ID')} />
            <FormField
              control={form.control}
              name="himedicID"
              render={({ field }) => (
                <>
                  <FormItem className="space-y-0">
                    <FormLabel className="fontsize-s font-medium text-black900">
                      {t('HIMEDIC ID')}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t('Please enter')} {...field} />
                    </FormControl>
                    <FormDescription className="fontsize-xs text-black700">
                      {t('Half-width numbers')}
                    </FormDescription>
                    <FormMessage className="fontsize-xs" />
                  </FormItem>

                  <p className="fontsize-s text-black700">
                    {t('If you do not know your HIMEDIC ID, please call')}
                    <Link
                      to="/"
                      className={cn(buttonVariants({ variant: 'link' }), 'p-0 h-auto text-link')}
                    >
                      {t(' inquiry ')}
                    </Link>
                    {t('by phone')}
                  </p>
                </>
              )}
            />
          </div>

          {/* TransferCode */}
          <div className="grid gap-4">
            <TitleSeparator
              title={t('Please enter the “transfer code” you received via email or SMS')}
            />
            <FormField
              control={form.control}
              name="transferCode"
              render={({ field }) => (
                <>
                  <FormItem className="space-y-0">
                    <FormLabel className="fontsize-s font-medium text-black900">
                      {t('Transfer code')}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t('Please enter')} {...field} />
                    </FormControl>
                    <FormDescription className="fontsize-xs text-black700">
                      {t('Half-width numbers')}
                    </FormDescription>
                    <FormMessage className="fontsize-xs" />
                  </FormItem>

                  <p className="fontsize-s text-black700">
                    {t('If you do not know the transfer code, please call')}
                    <Link
                      to="/"
                      className={cn(buttonVariants({ variant: 'link' }), 'p-0 h-auto text-link')}
                    >
                      {t(' inquiry ')}
                    </Link>
                    {t('by phone')}
                  </p>
                </>
              )}
            />
          </div>

          {/* Result Report Certification Code */}
          <div className="grid gap-4">
            <TitleSeparator
              title={t(
                'Please enter the “Result Report Certification Code” given to you at the receiving facility',
              )}
            />
            <FormField
              control={form.control}
              name="transferCode"
              render={({ field }) => (
                <>
                  <FormItem className="space-y-0 w-full mx-auto sm:w-[25rem]">
                    <FormLabel className="fontsize-s font-medium text-black900">
                      {t('Results report verification code')}
                    </FormLabel>
                    <OTPCode inputValues={certificateCode} setInputValues={setCertificateCode} />
                    <FormControl>
                      <Input placeholder={t('Please enter')} {...field} className="hidden" />
                    </FormControl>
                    <FormMessage className="fontsize-xs" />
                  </FormItem>

                  <div className="fontsize-s text-black700">
                    <p>{t('Please enter 8 half-width uppercase alphanumeric characters')}</p>
                    <p>{t('※ “0” means zero, “1” means one')}</p>
                  </div>

                  <p className="fontsize-s text-black700">
                    {t('If you do not know the result report verification code, please call')}
                    <Link
                      to="/"
                      className={cn(buttonVariants({ variant: 'link' }), 'p-0 h-auto text-link')}
                    >
                      {t(' inquiry ')}
                    </Link>
                    {t('by phone')}
                  </p>
                </>
              )}
            />
          </div>

          {/* If you have a result report verification code, please enter it. */}
          <div className="grid gap-4">
            <TitleSeparator
              title={t('If you have a result report verification code, please enter it')}
            />

            <p className="fontsize-s text-black900">
              {t(
                'If you do not have it, please proceed to the next input field without entering it',
              )}
            </p>
            <FormField
              control={form.control}
              name="transferCode"
              render={({ field }) => (
                <>
                  <FormItem className="space-y-0 w-full mx-auto sm:w-[25rem]">
                    <FormLabel className="fontsize-s font-medium text-black900">
                      {t('Results report verification code')}
                    </FormLabel>
                    <OTPCode inputValues={inputValues} setInputValues={setInputValues} />

                    <FormControl hidden>
                      <Input placeholder={t('Please enter')} {...field} className="hidden" />
                    </FormControl>
                    <FormMessage className="fontsize-xs" />
                  </FormItem>

                  <div className="fontsize-s text-black700">
                    <p>{t('Please enter 8 half-width uppercase alphanumeric characters')}</p>
                    <p>{t('※ “0” means zero, “1” means one')}</p>
                  </div>

                  <p className="fontsize-s text-black700">
                    {t('If you do not know the result report verification code, please call')}
                    <Link
                      to="/"
                      className={cn(buttonVariants({ variant: 'link' }), 'p-0 h-auto text-link')}
                    >
                      {t(' inquiry ')}
                    </Link>
                    {t('by phone')}
                  </p>
                </>
              )}
            />
          </div>

          {/* Personal information */}
          <div className="grid gap-4">
            <TitleSeparator title={t('Please enter your personal information')} />
            <div className="fontsize-s text-black900 mt-1">
              <p>
                {t(
                  'This information will be reflected in the age of your reservation, so please be sure to enter the correct information.',
                )}
              </p>
              <p>
                {t(
                  'Additionally, if you are a Grand Himedic Club member, please enter the information you provided when applying.',
                )}
              </p>
              <p>
                {t(
                  '(For corporate contracts, please enter the name of the representative in Name and Name (kana). Only the representative can register.)',
                )}
              </p>
            </div>

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <>
                  <FormItem className="space-y-0">
                    <FormLabel className="fontsize-s font-medium text-black900">
                      {t('Full name')}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t('Please enter')} {...field} />
                    </FormControl>
                    <FormMessage className="fontsize-xs" />
                  </FormItem>
                </>
              )}
            />

            <FormField
              control={form.control}
              name="nameKana"
              render={({ field }) => (
                <>
                  <FormItem className="space-y-0">
                    <FormLabel className="fontsize-s font-medium text-black900">
                      {t('Name (kana)')}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t('Please enter')} {...field} />
                    </FormControl>
                    <FormMessage className="fontsize-xs" />
                  </FormItem>
                </>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col !space-y-1">
                  <FormLabel className="fontsize-s font-medium text-black900">
                    {t('Date of birth')}
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <div
                          className={cn(
                            'w-full font-normal border border-black400 fontsize-m px-3 bg-pcMain flex justify-between items-center cursor-pointer h-[2.625rem] text-black900',
                          )}
                        >
                          <p>{field.value ? format(field.value, 'PPP') : t('Please select')}</p>
                          <Icons.iconCalendar />
                        </div>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="fontsize-s font-medium text-black900">
                    {t('Gender')}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="fontsize-m text-black900">
                      <SelectTrigger>
                        <SelectValue placeholder={t('Please select')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">m@example.com</SelectItem>
                      <SelectItem value="m@support.com">m@support.com</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="fontsize-m font-medium text-black900">
              <p>{t('Set your secret question and answer.')}</p>
              <p>{t('This is used to confirm your identity.')}</p>
            </div>

            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="fontsize-s font-medium text-black900">
                    {t('Security Question')}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t('Please select')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">m@example.com</SelectItem>
                      <SelectItem value="m@support.com">m@support.com</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <>
                  <FormItem className="space-y-0">
                    <FormLabel className="fontsize-s font-medium text-black900">
                      {t('The answer to the secret question')}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t('Please enter')} {...field} />
                    </FormControl>
                    <FormMessage className="fontsize-xs" />
                  </FormItem>
                </>
              )}
            />

            <div className="fontsize-m font-medium text-black900">
              <p>{t('Please enter the email address of ')}</p>
              <p>{t('the registrant.')}</p>
            </div>

            <FormField
              control={form.control}
              name="himedicID"
              render={({ field }) => (
                <>
                  <FormItem className="space-y-0">
                    <FormLabel className="fontsize-s font-medium text-black900">
                      {t('Email address')}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="sample@sample.com" {...field} />
                    </FormControl>
                    <FormDescription className="fontsize-xs text-black700">
                      {t('Half-width alphanumeric symbols')}
                    </FormDescription>
                    <FormMessage className="fontsize-xs" />
                  </FormItem>
                </>
              )}
            />

            <div className="w-full">
              <FormLabel className="fontsize-s font-medium text-black900">
                {t('Email address (re-enter)')}
              </FormLabel>
              <div className="flex gap-1 items-center w-full">
                <FormField
                  control={form.control}
                  name="birthday"
                  render={({ field }) => (
                    <>
                      <FormItem className="space-y-0">
                        <FormControl>
                          <Input placeholder="sample" {...field} className="w-[6.625rem]" />
                        </FormControl>
                        <FormMessage className="fontsize-xs" />
                      </FormItem>
                    </>
                  )}
                />
                <span> @</span>
                <FormField
                  control={form.control}
                  name="birthday"
                  render={({ field }) => (
                    <>
                      <FormItem className="space-y-0 w-[calc(100%-8.125rem)]">
                        <FormControl>
                          <Input placeholder="sample.com" {...field} />
                        </FormControl>
                        <FormMessage className="fontsize-xs" />
                      </FormItem>
                    </>
                  )}
                />
              </div>
              <FormDescription className="fontsize-xs text-black700">
                {t('Half-width alphanumeric symbols')}
              </FormDescription>
            </div>
            <p className="fontsize-s text-black700">
              {t('A temporary password will be sent to your email address.')}
            </p>
          </div>

          <div className="flex flex-col w-full mx-auto gap-4 items-center">
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
                className={cn(
                  buttonVariants({ variant: 'link' }),
                  'p-0 h-auto text-link fontsize-s',
                )}
              >
                {t(' inquiry ')}
              </Link>
              {t('by phone')}
            </span>
          </div>
        </div>
      </form>
    </Form>
  );
}
