import OtpCodeForm, { FormValues } from '@/components/OtpCodeForm';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

export const ReportConfirmForm = () => {
  // language definition
  const { t } = useTranslation('reportConfirm');
  const onSubmit = (data: FormValues) => {
    console.log('data: ' + JSON.stringify(data, null, 2));
    console.log('error: ' + data.otpCode);
  };
  return (
    <div className="p-5 py-0 sm:w-[900px] sm:m-auto sm:bg-white sm:flex sm:flex-col sm:mt-16 items-center sm:px-[170px] sm:pb-10">
      <div className="mt-10">
        <p className="font-medium text-lg">
          {t(
            'Please enter the "Result Report Certification Code" given to you at the facility where you received your treatment.',
          )}
        </p>
      </div>
      <div className="mt-4">
        <OtpCodeForm onSubmit={onSubmit} wrapperClassName={'w-[70%] mx-auto'}>
          <div className="mt-4 sm:text-sm">
            {t('contactUs')}
            <Link to={'/'} className="text-link">
              {t('contact')}
            </Link>
            {t('contactLast')}
          </div>
        </OtpCodeForm>
      </div>
    </div>
  );
};

export default ReportConfirmForm;
