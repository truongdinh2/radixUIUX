import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FORMAT_DATE } from '@/constants';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { IFormSettingAccount } from '@/types/setting';

interface Iprop extends React.HTMLAttributes<HTMLDivElement> {
  setStep: (step: number) => void;
  handleSubmitForm: (data: IFormSettingAccount) => void;
  step: number;
  isLoading: boolean;
}

interface IFormInput {
  birthDay: Date;
  gender: string;
}

const SettingBirthAnhGender = (props: Iprop) => {
  const { t } = useTranslation('account');
  const formValues = z.object({
    birthDay: z.date({
      required_error: t('date of birth required'),
    }),
    gender: z.string({
      required_error: t('gender required'),
    }),
  });

  const form = useForm<IFormInput>({
    resolver: zodResolver(formValues),
  });

  const handleBack = () => {
    props.setStep(0);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    const param = {
      birthDay: data.birthDay ? format(data.birthDay, FORMAT_DATE.DATE) : '',
      gender: data?.gender,
    };
    props.handleSubmitForm(param);
  };

  return (
    <div className="w-full min-h-screen bg-pcMain md:pt-[3.75rem] pt-[2.5rem] text-black900">
      <div className="sm:container sm:pt-10 mx-auto md:bg-white bg-pcMain md:px-10 md:py-10 px-5 !max-w-[56.25rem]">
        <div className="max-w-[35rem] mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex items-center cursor-pointer" onClick={handleBack}>
              <Icons.iconBack className="ml-1" />
              <h1 className="text-base font-bold ml-2 text-black900">{t('Back')}</h1>
            </div>
            <div className="border-l-2 border-black900 pl-6 ">
              <h1 className="text-[1.75rem] font-bold ">{t('Date of birth/gender')}</h1>
            </div>
          </div>
          <div className={`mt-8 ${props.isLoading && 'pointer-events-none'}`}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="!space-y-4">
                <FormField
                  control={form.control}
                  name="birthDay"
                  render={({ field }) => (
                    <FormItem className="flex flex-col !space-y-0.5">
                      <FormLabel>
                        <p className="fontsize-s font-medium text-black900">{t('date of birth')}</p>
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <button
                              className={cn(
                                'w-full text-left font-normal border border-black400 fontsize-m px-3 bg-pcMain flex justify-between items-center h-[2.625rem] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                                !field.value && 'text-muted-foreground',
                              )}
                            >
                              {field.value ? (
                                format(field.value, FORMAT_DATE.DATE)
                              ) : (
                                <span className="text-black500 fontsize-m">
                                  {t('date of birth')}
                                </span>
                              )}
                              <Icons.iconCalendar className="cursor-pointer" />
                            </button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(value) => {
                              field.onChange(value);
                            }}
                            disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
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
                    <FormItem className="!space-y-0.5">
                      <FormLabel>
                        <p className="fontsize-s font-medium text-black900">{t('gender')}</p>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue className="!fontsize-m" placeholder="" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male" className="fontsize-m">
                            {t('male')}
                          </SelectItem>
                          <SelectItem value="female" className="fontsize-m">
                            {t('female')}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="fontsize-s text-black700">
                  {t(
                    'Please enter the personal information of the person receiving the examination.',
                  )}
                </p>
                <div className="flex w-full justify-center ">
                  <Button
                    className="fontsize-m md:w-[11.25rem] w-[5rem] bg-primary900 hover:bg-primary900 mt-6"
                    type="submit"
                  >
                    {props.isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                    {t('change')}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingBirthAnhGender;
