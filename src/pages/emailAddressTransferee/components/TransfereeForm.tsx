import { useState } from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { WEB_ROUTES } from '@/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface IFormInput {
  type: string;
  email: string;
  phone: string;
}

const RADIO = {
  emailAddress: '1',
  mobileNumber: '2',
};

const TransfereeForm = () => {
  const form = useForm<IFormInput>();
  const [type, setType] = useState<string>();
  const { t } = useTranslation('healthChecklist');

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
  };

  return (
    <div className="sm:container sm:p-10 bg-white">
      <Link to={WEB_ROUTES.HEALTH_CHECK_LIST_PAGE}>
        <div className="flex items-center cursor-pointer">
          <Icons.iconBack />
          <h1 className="text-base font-bold ml-2 text-black900">{t('Back')}</h1>
        </div>
      </Link>

      <h1 className="text-xxl text-black900 border-black900 leading-[33.6px] pl-6 mb-8 border border-y-0 border-r-0 font-bold tracking-tight mt-4">
        {t('Right to receive medical examination information v2')}
      </h1>
      <div className="mt-8 flex flex-col gap-4 text-black900">
        <p className="fontsize-l">
          {t('Explanation of transfer of right to receive medical treatment')}
        </p>
        <div>
          <p className="fontsize-m">
            {t(
              'The transfer of right to receive a medical examination in this app is a function that allows the right to receive a medical examination to be transferred only to a user nominated by the member.',
            )}
          </p>
          <p className="fontsize-m text-black700">
            {t('Transfer from the transferred user is not possible.')}
          </p>
          <p className="fontsize-m text-black700">
            {t('Please refrain from buying or selling the right to receive medical treatment.')}
          </p>
        </div>
        <p className="fontsize-s">
          {t('Transferred consultation rights can only be reserved on the app.')}
        </p>
        <div className="border border-black400 rounded md:p-10 p-5">
          <Form {...form}>
            <p className="ontsize-m">
              {t('Please enter the email address or mobile phone number of the transferee.')}
            </p>
            <div className="mt-4">
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <RadioGroup
                  onValueChange={(value) => {
                    form.setValue('type', value);
                    form.setValue('email', '');
                    form.setValue('phone', '');
                    setType(value);
                  }}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={RADIO.emailAddress} />
                    </FormControl>
                    <FormLabel className="font-normal fontsize-m">{t('email')}</FormLabel>
                  </FormItem>
                  {type === RADIO.emailAddress && (
                    <div className="grid">
                      <Label htmlFor="email">{t('email label')}</Label>
                      <Input
                        id="email"
                        placeholder={'sample@sample'}
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        {...form.register('email', { required: t('email required') })}
                        className="text-base rounded-md"
                      />
                      <p className="fontsize-xs text-black700">
                        {t('Half-width alphanumeric symbols')}
                      </p>
                    </div>
                  )}
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={RADIO.mobileNumber} />
                    </FormControl>
                    <FormLabel className="font-normal fontsize-m">{t('mobile number')}</FormLabel>
                  </FormItem>
                  {type === RADIO.mobileNumber && (
                    <div className="grid">
                      <Label htmlFor="phoneNumber">{t('phone label')}</Label>
                      <Input
                        id="phoneNumber"
                        placeholder={t('phone placeholder')}
                        type="text"
                        autoCapitalize="none"
                        autoComplete="phoneNumber"
                        autoCorrect="off"
                        {...form.register('phone', { required: t('phone required') })}
                        className="text-base rounded-md"
                      />
                      <p className="fontsize-xs text-black700">
                        {t('Please enter your mobile phone number without hyphens')}
                      </p>
                    </div>
                  )}
                </RadioGroup>
                <div className="mt-1 flex justify-end w-full md:hidden">
                  <p className="fontsize-s text-link">{t('Get from contacts')}</p>
                </div>
                {type && (
                  <p className="mt-2 fontsize-s">
                    {' '}
                    {t('An SMS will be sent to the phone number you entered.')}
                  </p>
                )}
                <div className="w-full flex justify-center mt-10">
                  <p className="text-black700 fontsize-s">
                    {t('We will send the transfer code to the contact information above.')}
                  </p>
                </div>
                <div className="w-full flex justify-center mt-2">
                  <Button
                    className="fontsize-m md:w-[11.25rem] w-[6.5rem] bg-primary hover:bg-primary"
                    type="submit"
                  >
                    {t('Button Send')}
                  </Button>
                </div>
              </form>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default TransfereeForm;
