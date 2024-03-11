import React from 'react';
import { ModalConfirm } from '@/components/ModalConfirm';
import { Dialog } from '@/components/ui/dialog';
import { useTranslation } from 'react-i18next';
import { AccountAuthenticationForm } from '@/pages/account/components/AccountAuthenticationForm';

interface IFormInput {
  email: string;
  password: string;
}
export default function AccountAuthentication() {
  const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);
  const { t } = useTranslation('account');

  const handleSubmit = (data: IFormInput) => {
    console.log(data);
  };

  const handleConfirmSubmit = () => {
    setShowConfirmDialog(false);
  };

  const handleCancel = () => {
    setShowConfirmDialog(false);
  };

  const handleConfirm = () => {
    setShowConfirmDialog(true);
  };

  return (
    <>
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <div className="w-full flex flex-col items-center justify-center sm:pt-[3.75rem]">
          <AccountAuthenticationForm
            onSubmitHandler={handleSubmit}
            onHandleConfirm={handleConfirm}
          />
        </div>

        <ModalConfirm
          handleCancel={handleCancel}
          handleSubmit={handleConfirmSubmit}
          className="w-[calc(100vw-1rem)] md:w-[45rem] max-w-max "
          title={t('Confirmation')}
          textCancel={t('Cancel')}
          textSubmit={t('OK')}
        >
          <p>
            {t(
              'If you register your email address incorrectly, you will not receive a temporary password and will need to register again.',
            )}
          </p>
          <p>{t('Would you like to start registration again from the beginning?')}</p>
        </ModalConfirm>
      </Dialog>
    </>
  );
}
