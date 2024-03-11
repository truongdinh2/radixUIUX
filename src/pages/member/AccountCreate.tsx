import * as React from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import { memberSchema } from './data/schema';

export default function AccountCreate() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { schema } = memberSchema();
  const { t } = useTranslation('accountSetting');

  const defaultValues: Partial<Member> = {};
  type Member = z.infer<typeof schema>;
  const form = useForm<Member>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data: Member) => {
    setIsLoading(true);
    console.log('data', data);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="w-full h-full bg-pcMain pt-[2.5rem] text-black900 md:pt-[3.75rem] font-normal">
      <div className="mx-auto bg-pcMain max-w-[56.25rem] px-5 md:bg-white md:px-[10.625rem] md:py-10">
        <Link to="/accounts">
          <div className="flex items-center gap-2">
            <Icons.iconBack />
            <span className="text-base font-bold leading-[1.2rem]">{t('Return')}</span>
          </div>
        </Link>

        <h1 className="text-[1.75rem] font-bold leading-[2.1rem] border-l border-black900 pl-6 mt-4">
          {t('Add membership card')}
        </h1>

        <div className="flex flex-col gap-5 mt-8">
          <p className="fontsize-m text-black900">
            {t(
              'Adding a membership card Please enter the Grand HIMEDIC Club membership number to be added',
            )}
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-5">
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="memberID"
                    render={({ field }) => (
                      <>
                        <div className="mt-1">
                          <FormItem className="flex items-center space-y-0 gap-2">
                            <FormLabel className="fontsize-m text-black900">HMC</FormLabel>
                            <FormControl>
                              <Input placeholder=" 26-4-1234-05-2" {...field} />
                            </FormControl>
                          </FormItem>
                          <FormDescription className="ml-10 fontsize-xs text-black700">
                            {t('Please enter the half-width digit “-”')}
                          </FormDescription>
                          <FormMessage className="ml-10 fontsize-xs" />
                        </div>
                      </>
                    )}
                  />
                </div>
                <div className="flex justify-center mt-5">
                  <Button
                    disabled={isLoading}
                    className="fontsize-m bg-primary900 hover:bg-primary900 w-20 md:w-[11.25rem]"
                    type="submit"
                  >
                    {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                    {t('Addition')}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
