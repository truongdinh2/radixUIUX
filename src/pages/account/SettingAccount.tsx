import { useState } from 'react';
import { Icons } from '@/components/icons';
import { useTranslation } from 'react-i18next';
import { IFormSettingAccount } from '@/types/setting';
import SettingBirthAnhGender from '@/pages/account/components/SettingBirthAnhGender';
import SettingNameForm from '@/pages/account/components/SettingInfoNameForm';

import SettingEmailAddress from './components/SettingEmailAddress';
import SettingPassword from './components/SettingPassword';

const STEP = {
  setting: 0,
  settingName: 1,
  settingGender: 2,
  settingEmail: 3,
  settingPasscode: 4,
};

export default function SettingAccount() {
  const { t } = useTranslation('account');
  const [color, setColor] = useState<number | undefined>();
  const [step, setStep] = useState<number>(STEP.setting);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const data = [
    {
      id: 1,
      label: t('full name'),
    },
    {
      id: 2,
      label: t('Date of birth/gender'),
    },
    {
      id: 3,
      label: t('email address'),
    },
    {
      id: 4,
      label: t('passcode'),
    },
  ];

  const handleSubmitForm = (data: IFormSettingAccount) => {
    console.log('xxxx', data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(STEP.setting);
      return;
    }, 3000);
  };

  const renderStep = (step: number) => {
    switch (step) {
      case STEP.settingName:
        return (
          <SettingNameForm
            step={step}
            setStep={setStep}
            handleSubmitForm={handleSubmitForm}
            isLoading={isLoading}
          />
        );
      case STEP.settingGender:
        return (
          <SettingBirthAnhGender
            step={step}
            setStep={setStep}
            handleSubmitForm={handleSubmitForm}
            isLoading={isLoading}
          />
        );
      case STEP.settingEmail:
        return (
          <SettingEmailAddress
            step={step}
            setStep={setStep}
            handleSubmitForm={handleSubmitForm}
            isLoading={isLoading}
          />
        );
      case STEP.settingPasscode:
        return (
          <SettingPassword
            step={step}
            setStep={setStep}
            handleSubmitForm={handleSubmitForm}
            isLoading={isLoading}
          />
        );
      default:
        return;
    }
  };

  return (
    <>
      {step === STEP.setting && (
        <div className="w-full bg-pcMain md:pt-[3.75rem] pt-[2.5rem] text-black900">
          <div className="mx-auto md:bg-white bg-pcMain md:px-10 md:py-10 px-5 !max-w-[56.25rem]">
            <div className="max-w-[35rem] mx-auto">
              <div className="border-l-2 border-black900 pl-6 ">
                <h1 className="text-[1.75rem] font-bold ">{t('setting')}</h1>
              </div>
              <div className="mt-8 flex flex-col gap-2">
                {data?.map((el: { id: number; label: string }, index: number) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="w-full shadow-md py-[1.4375rem] pl-4 pr-2 flex items-center justify-between border border-black300 rounded hover:border hover:border-primary800 hover:border-opacity-70 cursor-pointer"
                        onClick={() => {
                          setStep(el.id);
                        }}
                        onMouseMove={() => {
                          setColor(el.id);
                        }}
                        onMouseLeave={() => {
                          setColor(undefined);
                        }}
                        onMouseDown={() => {
                          setColor(el.id);
                        }}
                      >
                        <div className="w-[calc(100%-2rem)]">
                          <p className="fontsize-m">{el.label}</p>
                        </div>
                        <div>
                          <Icons.iconNext color={color === el.id ? '#b5ac61' : ''} />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <p className="mt-8 ml-4 fontsize-s text-primary900 cursor-pointer">アカウント削除</p>
            </div>
          </div>
        </div>
      )}

      {renderStep(step)}
    </>
  );
}
