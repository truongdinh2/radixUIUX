import { useState } from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface IProps {
  step: number;
  setStep: (step: number) => void;
}

export default function ReceiveMedical(props: IProps) {
  const { t } = useTranslation('member');
  const [isLoading] = useState<boolean>(false);

  const handleBackInformationMember = () => {
    props.setStep(props.step - 1);
  };

  const handleSubmitReceiveMedical = () => {
    props.setStep(props.step + 1);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-pcMain md:pt-[3.75rem] pt-[2.5rem] text-black900">
        <div className="sm:container sm:pt-10 mx-auto md:bg-white bg-pcMain md:px-10 md:py-10 px-5">
          <div className="flex items-center cursor-pointer">
            <Icons.iconBack onClick={handleBackInformationMember} />
            <h1 className="text-base font-bold ml-2">{t('Back')}</h1>
          </div>
          <div className="md:mt-8 mt-6 flex gap-4">
            <div className="pt-1">
              <Icons.iconWarning />
            </div>
            <div className="flex flex-col gap-4">
              <p className="fontsize-m">
                {t(
                  'With one consultation right, one person can receive one of the following courses: New General Hospital, HM Tokyo University Hospital, HM Midtown, HM Tokyo Bay, HM Nagoya, and HM Kyoto University Hospital courses.',
                )}
              </p>
              <p className="fontsize-m">
                {t(
                  'You can receive priority reservations for the home clinic by requesting a reservation at least two months in advance of your occupancy date.',
                )}
              </p>
              <p className="fontsize-m">
                {t(
                  'Consultation rights other than the new comprehensive course cannot be reserved or transferred from this app.',
                )}
              </p>
              <p className="fontsize-m">
                {t(
                  'Please contact the club desk regarding reservations for the campaign right to receive medical examinations.',
                )}
              </p>
              <p className="fontsize-m">
                {t('Click here for frequently asked questions.')}
                <span className="text-link">{t('Text Here')}</span>。
              </p>
            </div>
          </div>
          <p className="fontsize-m mt-4">
            {t(
              'If you have received a transfer of the right to receive a medical examination, please complete the receiving procedure from Receive the right to receive a medical examinationbelow.',
            )}
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              disabled={isLoading}
              className="fontsize-m md:w-[11.25rem] w-[7.5rem] bg-primary hover:bg-primary"
              type="submit"
              onClick={handleSubmitReceiveMedical}
            >
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              {t('Receipt of right to receive medical examination')}
            </Button>
          </div>
          <p className="mt-4 text-black700 fontsize-s">
            {t('Please refrain from buying or selling the right to receive medical treatment.')}
          </p>
        </div>
      </div>
    </>
  );
}
