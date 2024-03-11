// import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { useValidation } from '@/lib/validationUtils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export type FormValues = {
  selectVal: string;
  selectSubText: string;
  username: string;
  identification: boolean;
  type: string;
  notice: string;
};

const defaultValues: Partial<FormValues> = {
  selectVal: '',
  selectSubText: '',
  username: '',
  identification: false,
  type: '',
  notice: '',
};

export default function ViewComponent() {
  // language definition
  const { t } = useTranslation('reportConfirm');
  const { textRequired } = useValidation();
  const formValues = z.object({
    selectVal: z.string(),
    selectSubText: z.string(),
    username: textRequired(),
  });
  const form = useForm<FormValues>({
    resolver: zodResolver(formValues),
    defaultValues,
  });
  const onSubmit = (data: FormValues) => {
    console.log('data: ', JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex flex-wrap p-4">
      <div className="w-full">
        <h1 className="text-xl font-extrabold">FORM</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap w-full gap-y-4">
            <div className="flex-1 basis-1/2 w-1/2">
              <FormField
                control={form.control}
                name="selectVal"
                render={({ field }) => (
                  <FormItem className="max-w-[50%]">
                    <FormLabel className="fontsize-s font-medium text-black900">
                      {t('Gender')}
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={''}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('Please select')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Option 1">
                          <span className="text-black900">Option 1</span>
                        </SelectItem>
                        <SelectItem value="Option 2">
                          <span className="text-black900">Option 2</span>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-1 basis-1/2 w-1/2">
              <FormField
                control={form.control}
                name="selectSubText"
                render={({ field }) => (
                  <FormItem className="max-w-[50%]">
                    <FormLabel className="fontsize-s font-medium text-black900">
                      {t('selectSubText')}
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={''} subText="円">
                      <SelectTrigger>
                        <SelectValue placeholder={t('Please select')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Option 1">
                          <span className="text-black900">Option 1</span>
                        </SelectItem>
                        <SelectItem value="Option 2">
                          <span className="text-black900">Option 2</span>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name. It can be your real name or a pseudonym. You
                      can only change this once every 30 days.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} textSub="円" />
                    </FormControl>
                    <FormDescription>
                      This is your public display name. It can be your real name or a pseudonym. You
                      can only change this once every 30 days.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2">
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
            </div>
            <div className="w-1/2">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Notify me about...</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="all" />
                          </FormControl>
                          <FormLabel className="font-normal">All new messages</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="mentions" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Direct messages and mentions
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="none" />
                          </FormControl>
                          <FormLabel className="font-normal">Nothing</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2">
              <FormField
                control={form.control}
                name="notice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notice</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      You can <span>@mention</span> other users and organizations to link to them.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2">
              <Toaster />
            </div>
            <div className="flex-1 basis-full">
              <Button type="submit" variant={'primary'} className="m-auto mt-10 block px-5 py-3">
                {t('Next')}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
