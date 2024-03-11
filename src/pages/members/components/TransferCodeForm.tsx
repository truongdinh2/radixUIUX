import { useState } from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface IProps {
  step: number;
  setStep: (step: number) => void;
}

interface IFormInput {
  code: string;
}

export default function TransferCodeForm(props: IProps) {
  const { t } = useTranslation('member');
  const [isLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleBackInformationMember = () => {
    props.setStep(props.step - 1);
  };

  const onSubmit: SubmitHandler<IFormInput> = async () => {
    //
  };

  return (
    <>
      <div className="w-full min-h-screen bg-pcMain md:pt-[3.75rem] pt-[2.5rem] text-black900">
        <div className="sm:container sm:pt-10 mx-auto md:bg-white bg-pcMain md:px-10 md:py-10 px-5">
          <div className="flex items-center cursor-pointer">
            <Icons.iconBack onClick={handleBackInformationMember} />
            <h1 className="text-base font-bold ml-2">{t('Back')}</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:mt-10 mt-6 flex flex-col gap-4">
              <p className="fontsize-m">
                {t('Please enter the transfer code you received via email or SMS.')}
              </p>
              <div className="grid">
                <Label htmlFor="code">{t('Label Code')}</Label>
                <Input
                  id="code"
                  placeholder={t('Placeholder Code')}
                  type="text"
                  autoCapitalize="none"
                  autoComplete="code"
                  autoCorrect="off"
                  disabled={isLoading}
                  {...register('code', { required: `${t('Label Code')}` })}
                  error={errors?.code?.message}
                  className="bg-form"
                />
              </div>
            </div>
            <p className="text-black700 fontsize-s">{t('Half-width alphanumeric characters')}</p>
            <div className="mt-8 flex justify-center">
              <p className="md:max-w-[20.9375rem] fontsize-s">
                {t('If you do not know the transfer code, please call us.')}
                <span className="text-link">{t('Inquiry')}</span>
                {t('Please')}
              </p>
            </div>
            <div className="mt-2.5 flex justify-center ">
              <Button
                disabled={isLoading}
                className="fontsize-m md:w-[11.25rem] w-[5rem] bg-primary hover:bg-primary"
                type="submit"
              >
                {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                {t('Button Next')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
