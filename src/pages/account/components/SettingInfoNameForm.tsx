import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { REGEX } from '@/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IFormSettingAccount } from '@/types/setting';

interface IFormInput {
  fullName: string;
  nameKana: string;
}

interface Iprop extends React.HTMLAttributes<HTMLDivElement> {
  setStep: (step: number) => void;
  handleSubmitForm: (data: IFormSettingAccount) => void;
  step: number;
  isLoading: boolean;
}

const SettingNameForm = (props: Iprop) => {
  const { t } = useTranslation('account');

  const {
    register,
    handleSubmit,
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
              <h1 className="text-[1.75rem] font-bold ">{t('full name')}</h1>
            </div>
          </div>
          <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="grid gap-0.5">
                  <Label htmlFor="fullName" className="fontsize-s font-medium text-black900">
                    {t('full name')}
                  </Label>
                  <Input
                    id="fullName"
                    placeholder={t('Please enter')}
                    type="text"
                    autoCapitalize="none"
                    autoComplete="fullName"
                    autoCorrect="off"
                    disabled={props.isLoading}
                    {...register('fullName', {
                      required: t('full name required'),
                      maxLength: {
                        value: 100,
                        message: t('The name has more than 100 characters.'),
                      },
                    })}
                    error={errors?.fullName?.message}
                    className="border-black400 bg-form"
                  />
                </div>
                <div className="grid gap-0.5">
                  <Label htmlFor="nameKana" className="fontsize-s font-medium text-black900">
                    {t('name kana')}
                  </Label>
                  <Input
                    id="nameKana"
                    placeholder={t('Please enter')}
                    type="text"
                    autoComplete="nameKana"
                    autoCorrect="off"
                    disabled={props.isLoading}
                    {...register('nameKana', {
                      required: t('name kana required'),
                      pattern: {
                        value: REGEX.KANNA_NAME,
                        message: t('name kana regex'),
                      },
                      maxLength: {
                        value: 50,
                        message: t('The name (kana) has more than 50 characters.'),
                      },
                    })}
                    error={errors?.nameKana?.message}
                    className="border-black400 bg-form"
                  />
                </div>
                <p className="fontsize-s text-black700">
                  {t('Please enter the real name of the person receiving the examination.')}
                </p>
              </div>
              <div className="flex w-full justify-center mt-10">
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

export default SettingNameForm;
