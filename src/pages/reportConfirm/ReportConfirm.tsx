import { useState } from 'react';
import icon_close from '@/assets/icon_close.svg';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { WEB_ROUTES } from '@/constants/common.ts';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import ReportConfirmForm from './ReportConfirmForm.tsx';

const notificationsFormSchema = z.object({
  identification: z.boolean().default(false),
});

type NotificationsFormValues = z.infer<typeof notificationsFormSchema>;

export const ReportConfirm = () => {
  const { t } = useTranslation('reportConfirm');

  //
  const [isApproved, setIsApproved] = useState<boolean>(false);
  // This can come from your database or API.
  const defaultValues: Partial<NotificationsFormValues> = {
    identification: false,
  };

  const form = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues,
  });

  const onSubmit = (data: NotificationsFormValues) => {
    console.log('data: ' + JSON.stringify(data, null, 2));
    setIsApproved(true);
  };

  const navigate = useNavigate();
  return (
    <section className="min-h-160">
      <div className="bg-base900 flex items-center justify-between p-5 text-white">
        <div>{t('Result report')}</div>
        <div>
          <img
            className="cursor-pointer"
            src={icon_close}
            alt="Close"
            onClick={() => navigate(WEB_ROUTES.TOP)}
          />
        </div>
      </div>

      {!isApproved ? (
        <div className="p-5 py-0 sm:w-[900px] sm:m-auto sm:bg-white sm:flex sm:flex-col sm:mt-16 items-center sm:px-[170px] sm:pb-10">
          <div className="mt-10">
            <p className="font-medium text-lg">
              {t(
                'Because the result report contains sensitive personal information, only the person undergoing the examination can view it.',
              )}
            </p>
            <p className="heading-base">
              {t('*You will need the "result report code" given to you after your consultation.')}
            </p>
          </div>
          <div className="mt-10 sm:self-start">
            <p className="font-medium text-lg">{t('Are you the recipient?')}</p>
          </div>
          <div className="mt-10 sm:self-start sm:w-full">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="identification"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className={cn('!text-base cursor-pointer')}>
                          {t('I am the person who underwent the examination.')}
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <Button variant={'primary'} className="m-auto mt-10 block px-5 py-3">
                  {t('View result report')}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      ) : (
        <ReportConfirmForm />
      )}
    </section>
  );
};
