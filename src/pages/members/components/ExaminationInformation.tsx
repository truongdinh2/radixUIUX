import { useState } from 'react';
import { Icons } from '@/components/icons';
import { WEB_ROUTES } from '@/constants';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface IProps {
  step: number;
  setStep: (step: number) => void;
}

const TYPE = {
  receiveMedical: 1,
  ListOfMedical: 2,
};
interface IColor {
  key: number;
  color: string;
}
export default function InformationMember(props: IProps) {
  const { t } = useTranslation('member');
  const [color, setColor] = useState<IColor | undefined>({
    key: 0,
    color: '',
  });
  const handleMoveReceiveMedical = (type: number) => {
    if (type === 1) {
      props.setStep(props.step + 1);
    } else {
      props.setStep(props.step + 1);
    }
  };

  const handleChangeColor = (key: number) => {
    setColor({
      key: key,
      color: '#b5ac61',
    });
  };

  return (
    <>
      <div className="w-full min-h-screen bg-pcMain md:pt-[3.75rem] pt-[2.5rem] text-black900">
        <div className="sm:container sm:pt-10 mx-auto md:bg-white bg-pcMain md:px-10 md:py-10 px-5">
          <div className="border-l-2 border-black900 pl-6 ">
            <h1 className="text-[1.75rem] font-bold ">
              {t('Right to receive medical examination information')}
            </h1>
          </div>
          <p className="mt-8 fontsize-m ">
            {t(
              'Please select the membership number for the medical examination privilege you wish to use.',
            )}
          </p>
          <Link to={WEB_ROUTES.HEALTH_CHECK_LIST_PAGE}>
            <div
              className="mt-4 w-full shadow-md py-4 pl-4 pr-2 flex items-center justify-between border border-black300 rounded hover:border hover:border-primary800 hover:border-opacity-70"
              onMouseMove={() => {
                handleChangeColor(2);
              }}
              onMouseLeave={() => {
                setColor(undefined);
              }}
            >
              <div className="w-[calc(100%-2rem)]">
                <p className="fontsize-l">{'HMC 26-4-6284-10'}</p>
                <p className="fontsize-s text-black700 mb-2">{t('Text Satoshi Genma')}</p>
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex gap-2 w-full">
                    <div className="py-0.5 bg-label text-white text-center w-[7.5rem]">
                      <span className="fontsize-xs">{t('Text Home Clinic')}</span>
                    </div>
                    <div className="py-0.5">
                      <span className="fontsize-xs">{t('himedic midtown')}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full">
                    <div className="py-0.5 bg-label text-white  w-[7.5rem] text-center">
                      <span className="fontsize-xs">{t('Text Number of consultation rights')}</span>
                    </div>
                    <div className="py-0.5">
                      <span className="fontsize-xs">{t('himedic midtown')}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Icons.iconNext color={color?.key === 1 ? '#b5ac61' : undefined} />
              </div>
            </div>
          </Link>

          <div
            className="mt-4 w-full shadow-md py-4 pl-4 pr-2 flex items-center justify-between border border-black300 rounded hover:border hover:border-primary800 hover:border-opacity-70"
            onClick={() => {
              handleMoveReceiveMedical(TYPE.ListOfMedical);
            }}
            onMouseMove={() => {
              handleChangeColor(1);
            }}
            onMouseLeave={() => {
              setColor(undefined);
            }}
          >
            <div>
              <p className="fontsize-l">
                {t('Text Transferred and received medical examination rights')}
              </p>
            </div>
            <div>
              <Icons.iconNext color={color?.key === 2 ? '#b5ac61' : undefined} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
