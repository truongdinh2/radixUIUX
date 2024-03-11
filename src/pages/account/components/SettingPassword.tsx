import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { REGEX, WEB_ROUTES } from '@/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { IFormSettingAccount } from '@/types/setting';

interface IFormInput {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

interface IProp extends React.HTMLAttributes<HTMLDivElement> {
  setStep: (step: number) => void;
  handleSubmitForm: (data: IFormSettingAccount) => void;
  step: number;
  isLoading: boolean;
}

const SettingPassword = (props: IProp) => {
  const { t } = useTranslation('account');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    props.handleSubmitForm(data);
  };

  const handleBack = () => {
    props.setStep(0);
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
              <h1 className="text-[1.75rem] font-bold ">{t('Change Password')}</h1>
            </div>
          </div>
          <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="grid gap-0.5">
                  <Label htmlFor="currentPassword" className="fontsize-s font-medium text-black900">
                    {t('Current Password')}
                  </Label>
                  <Input
                    id="currentPassword"
                    placeholder={t('Please enter')}
                    type="password"
                    autoCapitalize="none"
                    autoComplete="currentPassword"
                    autoCorrect="off"
                    {...register('currentPassword', {
                      required: t('Current Password required'),
                      maxLength: {
                        value: 255,
                        message: t('The current password has more than 255 characters.'),
                      },
                      minLength: {
                        value: 8,
                        message: t('Your current password must be at least 8 characters.'),
                      },
                      pattern: {
                        value: REGEX.PASSWORD,
                        message: t(
                          'Please use at least three types of passwords: English letters (uppercase and lowercase), numbers, and symbols.',
                        ),
                      },
                    })}
                    error={errors?.currentPassword?.message}
                    className="border-black400 bg-form"
                  />
                </div>
                <div className="grid gap-0.5">
                  <Label htmlFor="newPassword" className="fontsize-s font-medium text-black900">
                    {t('New Password')}
                  </Label>
                  <Input
                    id="newPassword"
                    placeholder={t('Please enter')}
                    type="password"
                    autoComplete="newPassword"
                    autoCorrect="off"
                    {...register('newPassword', {
                      required: t('New Password required'),
                      maxLength: {
                        value: 255,
                        message: t('The new password has more than 255 characters.'),
                      },
                      minLength: {
                        value: 8,
                        message: t('New password must be at least 8 characters.'),
                      },
                      pattern: {
                        value: REGEX.PASSWORD,
                        message: t(
                          'Please use at least three types of passwords: English letters (uppercase and lowercase), numbers, and symbols.',
                        ),
                      },
                    })}
                    error={errors?.newPassword?.message}
                    className="border-black400 bg-form"
                  />
                  <p className="fontsize-xs text-black700">
                    {t('Half width alphanumeric symbols')}
                  </p>
                </div>
                <p className="fontsize-s text-black700">
                  {t(
                    'Please use at least three types of passwords: English letters (uppercase and lowercase), numbers, and symbols.',
                  )}
                  <br />
                  {t('Requires at least 8 characters')}
                </p>
                <div className="grid gap-0.5">
                  <Label
                    htmlFor="newPasswordConfirm"
                    className="fontsize-s font-medium text-black900"
                  >
                    {t('New password re-enter')}
                  </Label>
                  <Input
                    id="newPasswordConfirm"
                    placeholder={t('Please enter')}
                    type="password"
                    autoCapitalize="none"
                    autoComplete="newPasswordConfirm"
                    autoCorrect="off"
                    {...register('newPasswordConfirm', {
                      required: t('New password re-enter required'),
                      validate: (val: string) => {
                        if (watch('newPassword') != val) {
                          return `${t('New password (re-enter) does not match. Please enter the same password.')}`;
                        }
                      },
                    })}
                    error={errors?.newPasswordConfirm?.message}
                    className="border-black400 bg-form"
                  />
                </div>
                <Link to={WEB_ROUTES.FORGOT_PASSWORD}>
                  <p className="fontsize-m text-link cursor-pointer hover:underline">
                    {t('Forgot your password')}
                  </p>
                </Link>
              </div>
              <div className="flex w-full justify-center mt-10">
                <Button
                  className="fontsize-m md:w-[11.25rem] w-[5rem] bg-primary900 hover:bg-primary900"
                  type="submit"
                >
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

export default SettingPassword;
