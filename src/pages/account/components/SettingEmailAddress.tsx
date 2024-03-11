import { useEffect } from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { REGEX } from '@/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IFormSettingAccount } from '@/types/setting';

interface IFormInput {
  emailAddress: string;
  nameEmail: string;
  domainEmail: string;
  emailAddressConfirm: string | undefined;
}

interface Iprop extends React.HTMLAttributes<HTMLDivElement> {
  setStep: (step: number) => void;
  handleSubmitForm: (data: IFormSettingAccount) => void;
  step: number;
  isLoading: boolean;
}

const SettingEmailAddress = (props: Iprop) => {
  const { t } = useTranslation('account');

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    const param = {
      emailAddress: data?.emailAddress,
      emailAddressConfirm: data?.emailAddressConfirm,
    };
    props.handleSubmitForm(param);
  };

  const handleBack = () => {
    props.setStep(0);
  };

  useEffect(() => {
    const value = getValues();
    if (value?.nameEmail && value.domainEmail) {
      setValue('emailAddressConfirm', value?.nameEmail + '@' + value.domainEmail);
    } else {
      setValue('emailAddressConfirm', undefined);
    }
  });

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
              <h1 className="text-[1.75rem] font-bold ">{t('email address')}</h1>
            </div>
          </div>
          <div className={`mt-8 ${props.isLoading && 'pointer-events-none'}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="grid space-y-1">
                  <Label htmlFor="emailAddress" className="fontsize-s font-medium text-black900">
                    {t('email address')}
                  </Label>
                  <Input
                    id="emailAddress"
                    placeholder={'sample@sample.com'}
                    type="text"
                    autoCapitalize="none"
                    autoComplete="emailAddress"
                    autoCorrect="off"
                    {...register('emailAddress', {
                      required: t('email address required'),
                      pattern: {
                        value: REGEX.EMAIL,
                        message: t('The format of the email address is incorrect.'),
                      },
                      maxLength: {
                        value: 255,
                        message: t('Your email address has more than 255 characters.'),
                      },
                    })}
                    error={errors?.emailAddress?.message}
                    className="border-black400 bg-form"
                  />
                  <p className="fontsize-xs text-black700">
                    {t('Half width alphanumeric symbols')}
                  </p>
                </div>
                <div className="grid space-y-1">
                  <Label htmlFor="nameEmail" className="fontsize-s font-medium text-black900">
                    {t('E-mail address re-enter')}
                  </Label>
                  <div className="flex gap-1">
                    <div className="flex gap-1">
                      <Input
                        id="nameEmail"
                        placeholder={'sample'}
                        type="text"
                        autoCapitalize="none"
                        autoComplete="nameEmail"
                        autoCorrect="off"
                        {...register('nameEmail', {
                          required: t('E-mail address re-enter required'),
                          maxLength: {
                            value: 255,
                            message: t(
                              'The email address (re-enter) has more than 255 characters.',
                            ),
                          },
                        })}
                        className="border-black400 bg-form w-[6.75rem]"
                      />
                    </div>
                    <span className="mt-2 fontsize-m black700">@</span>
                    <div className="w-full">
                      <Input
                        id="domainEmail"
                        placeholder={'sample.com'}
                        type="text"
                        autoCapitalize="none"
                        autoComplete="domainEmail"
                        autoCorrect="off"
                        {...register('domainEmail', {
                          required: t('E-mail address re-enter required'),
                          pattern: {
                            value: REGEX.EMAIL_DONMAN,
                            message: t('The format of the email address (re-enter) is incorrect.'),
                          },
                          maxLength: {
                            value: 255,
                            message: t(
                              'The email address (re-enter) has more than 255 characters.',
                            ),
                          },
                          validate: (val: string) => {
                            if (watch('emailAddress') != `${watch('nameEmail')}@${val}`) {
                              return `${t('Email addresses do not match. Please enter the same email address.')}`;
                            }
                          },
                        })}
                        className="border-black400 bg-form"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-red-500">
                    {errors?.domainEmail?.message || errors?.nameEmail?.message}
                  </p>
                  <p className="fontsize-xs text-black700">
                    {t('Half width alphanumeric symbols')}
                  </p>
                </div>
                <p className="fontsize-s text-black700">
                  {t(
                    'Please enter the personal information of the person receiving the examination.',
                  )}
                </p>
              </div>
              <p className="fontsize-xs text-black700 mt-10">
                {t(
                  'A confirmation email will be sent to your new email address, so please check it.',
                )}
              </p>
              <div className="flex w-full justify-center mt-2.5">
                <Button
                  className="fontsize-m md:w-[11.25rem] w-[5rem] bg-primary900 hover:bg-primary900"
                  type="submit"
                >
                  {props.isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                  {t('change')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingEmailAddress;
