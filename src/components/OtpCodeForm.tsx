import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { Button } from './ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem } from './ui/form';
import { Input } from './ui/input';

const otpCodeSchema = z.object({
  otpCode: z.array(
    z.string().regex(/^[0-9A-F]{1}$/),
    // .optional(),
  ),
});

export type FormValues = {
  otpCode: string[];
};

const defaultValues: Partial<FormValues> = {
  otpCode: new Array(8).fill(''),
};

interface OtpCodeFormProps {
  onSubmit: (values: FormValues) => void;
  children?: React.ReactNode;
  wrapperClassName?: string;
}

export default function OtpCodeForm({ children, onSubmit, wrapperClassName }: OtpCodeFormProps) {
  // language definition
  const { t } = useTranslation('reportConfirm');
  const { t: tValidation } = useTranslation('validation');
  const [otpRefCurrentIndex, setOtpRefCurrentIndex] = useState(0);
  // otp input ref
  const otpRef = useRef<HTMLInputElement>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(otpCodeSchema),
    defaultValues,
  });

  useEffect(() => {
    otpRef.current?.focus();
    console.log('otpRefCurrentIndex', otpRefCurrentIndex);
  }, [otpRefCurrentIndex]);

  // handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const { value } = e.target;
    const lastDigit = value.substring(value.length - 1);
    form.setValue(`otpCode.${id}`, lastDigit);
    if (value) {
      setOtpRefCurrentIndex(id + 1);
    }
  };

  // handle keyboard input change
  const handleKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>, id: number) => {
    if (key === 'ArrowRight' && id < 8) {
      otpRef.current?.blur();
      // console.log('id', id);
      setOtpRefCurrentIndex(id + 1);
      // console.log('otpRef.current', otpRef.current);
    }
    if (key === 'ArrowLeft' && id > 0) {
      otpRef.current?.blur();
      setOtpRefCurrentIndex(id - 1);
    }
    if (key === 'Backspace' && id > 0) {
      setTimeout(() => {
        setOtpRefCurrentIndex(id - 1);
      }, 10);
    }
    // otpRef.current?.focus();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={cn(wrapperClassName)}>
          <div className="flex-1 basis-full text-sm">{t('Results report verification code')}</div>
          <div className="flex mt-1.5 gap-1">
            {form.watch('otpCode').map((field, id) => {
              return (
                <FormField
                  control={form.control}
                  name={`otpCode.${id}`}
                  key={id}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="sm:pl-4"
                          ref={otpRefCurrentIndex == id ? otpRef : null}
                          // onFocus={() => onFocus(id)}
                          onChange={(e) => handleChange(e, id)}
                          onKeyDown={(e) => handleKeyDown(e, id)}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              );
            })}
          </div>
          {(form.formState?.errors?.otpCode?.length || 0) > 0 && (
            <div className="error-message">{tValidation('otpCodeFormat.report')}</div>
          )}
        </div>
        <FormDescription className="mt-4">
          {t('Please enter 8 half-width uppercase alphanumeric characters.')} <br />
          {t('*“0” means zero, “1” means one.')}
        </FormDescription>
        {children}
        <Button type="submit" variant={'primary'} className="m-auto mt-10 block px-5 py-3">
          {t('Next')}
        </Button>
      </form>
    </Form>
  );
}
