import React from 'react';
import info from '@/assets/icon_info.svg';
import { ModalConfirm } from '@/components/ModalConfirm';
import { Dialog } from '@radix-ui/react-dialog';
import { useTranslation } from 'react-i18next';

import { AlreadyReceivedExamination } from './components/AlreadyReceivedExamination';
import { AssignmentExamination } from './components/AssignmentExamination';
import { CancelingExamination } from './components/CancelingExamination';
import { InProgressExamination } from './components/InProgressExamination';
import { RequestAReservationExamination } from './components/RequestAReservationExamination';
import { RequestingExamination } from './components/RequestingExamination';
import { ReservationConfirmed } from './components/ReservationConfirmed';
import { WaitForReceivingExamination } from './components/WaitForReceivingExamination';
import { isMoreThanNDaysBeforeExam } from './helpers/calculationDate';

export enum ExaminationStatus {
  NoUse = 'NoUse',
  RegistrationInProgress = 'RegistrationInProgress',
  ReservationConfirmed = 'ReservationConfirmed',
  ReservationConfirmed1Visited = 'ReservationConfirmed1Visited',
  ApplyingForReservationChange = 'ApplyingForReservationChange',
  ReservationCanceling = 'ReservationCanceling',
  ExchangeInProgress = 'ExchangeInProgress',
  Resetting = 'Resetting',
  InProgress = 'InProgress',
  Using = 'Using',
  DoneExamination = 'DoneExamination',
  DoneExchange = 'DoneExchange',
}

const HealthCheckListPage = () => {
  const { t } = useTranslation('healthChecklist');
  const [showChangeDateConfirmDialog, setShowChangeDateConfirmDialog] = React.useState(false);
  const [showReservationCancelConfirmDialog, setShowReservationCancelConfirmDialog] =
    React.useState(false);
  const [showReservationCanceledNotification, setShowReservationCanceledNotification] =
    React.useState(false);
  const [showReservationBeforeCanceledNotification, setShowReservationBeforeCanceledNotification] =
    React.useState(false);
  const [showAssignmentCancelConfirmDialog, setShowAssignmentCancelConfirmDialog] =
    React.useState(false);

  const handleChangeDateConfirmSubmit = () => {
    setShowChangeDateConfirmDialog(false);
  };

  const handleChangeDateCancel = () => {
    setShowChangeDateConfirmDialog(false);
  };

  const handleChangeDateConfirm = () => {
    setShowChangeDateConfirmDialog(true);
  };
  const handleReservationCancelConfirmSubmit = () => {
    handleCloseReservationCancel();
    const numberOfDaysBeforeExam = 7;
    const examinationDate = '2024/03/01';
    if (isMoreThanNDaysBeforeExam(examinationDate, numberOfDaysBeforeExam) === true) {
      setShowReservationCanceledNotification(true);
    } else if (isMoreThanNDaysBeforeExam(examinationDate, numberOfDaysBeforeExam) === false) {
      setShowReservationBeforeCanceledNotification(true);
    }
  };
  const handleCloseReservationBeforeCanceledNotification = () => {
    setShowReservationBeforeCanceledNotification(false);
  };
  const handleCloseReservationCanceledNotification = () => {
    setShowReservationCanceledNotification(false);
  };

  const handleCloseReservationCancel = () => {
    setShowReservationCancelConfirmDialog(false);
  };
  const handleOpenReservationCancel = () => {
    setShowReservationCancelConfirmDialog(true);
  };

  const handleCloseAssignmentCancelConfirmDialog = () => {
    setShowAssignmentCancelConfirmDialog(false);
  };
  const handleOpenAssignmentCancelConfirmDialog = () => {
    setShowAssignmentCancelConfirmDialog(true);
  };

  return (
    <section className="fontsize-m bg-white sm:bg-transparent px-5 py-10">
      <div className="sm:container sm:px-10 sm:pt-10 bg-white">
        <h1 className="text-xxl text-black900 border-black900 leading-[33.6px] pl-6 mb-8 border border-y-0 border-r-0 font-bold tracking-tight">
          {t('Right to receive medical examination information')}
        </h1>
        <div className="flex flex-col gap-2.5 w-full">
          <div className="flex bg-white gap-3.5 relative items-start">
            <img src={info} alt="info" />
            <span className="leading-[25.6px] text-black900">
              ひとつの受診権で1名様が、新総合、HM・東大病院、HM・ミッドタウン、HM東京ベイ、HM名古屋、HM京大病院コースの内いずれか1コースを受診できます。
              <br />
              <br />
              占有日期間の2か月前までに予約をリクエストいただくことで、優先的にホームクリニックのご予約をお取りいただけます。
              <br />
              <br />
              新総合コース以外の受診権は、このアプリからの予約・ 譲渡は行えません。
              <br />
              <br />
              また、キャンペーンの受診権での予約についてはクラブデスクにお問合せください。
              <br />
              <br />
              よくあるお問い合わせは
              <a className="text-blue" href="#">
                こちら
              </a>
              。
            </span>
          </div>
        </div>
      </div>
      {Object.keys(ExaminationStatus).map((keyExam) => {
        return (
          <MedicalExaminationStatus
            key={keyExam}
            handleOpenReservationCancel={handleOpenReservationCancel}
            handleChangeDateConfirm={handleChangeDateConfirm}
            step={ExaminationStatus[keyExam as keyof typeof ExaminationStatus]}
            handleOpenAssignmentCancelConfirmDialog={handleOpenAssignmentCancelConfirmDialog}
          />
        );
      })}
      <div className="h-8 w-full hidden sm:block bg-white"></div>
      {/* 5_2_2 予約キャンセル確認 */}
      <Dialog
        open={showReservationCancelConfirmDialog}
        onOpenChange={setShowReservationCancelConfirmDialog}
      >
        <ModalConfirm
          handleCancel={handleCloseReservationCancel}
          handleSubmit={handleReservationCancelConfirmSubmit}
          className="w-[calc(100vw-1rem)] md:w-[45rem] max-w-max "
          title={t('Confirmation')}
          textCancel={t('Cancel')}
          textSubmit={t('OK')}
        >
          <h2 className="text-lg text-black900 font-medium mb-4">
            {t('Do you want to cancel your reservation?')}
          </h2>
          <p className="text-base text-black900">
            {t('If you choose to cancel, all information you have entered will be discarded.')}
          </p>
        </ModalConfirm>
      </Dialog>
      {/* 5_2_3 予約キャンセル 通知 */}
      <Dialog
        open={showReservationCanceledNotification}
        onOpenChange={setShowReservationCanceledNotification}
      >
        <ModalConfirm
          handleCancel={handleCloseReservationCanceledNotification}
          handleSubmit={handleCloseReservationCanceledNotification}
          className="w-[calc(100vw-1rem)] md:w-[45rem] max-w-max "
          title={t('Confirmation')}
          textSubmit={t('OK')}
        >
          <p className="text-base text-black900">
            {t('I canceled my reservation. Please make a reservation again.')}
          </p>
        </ModalConfirm>
      </Dialog>
      {/* 5_2_4 予約変更・キャンセル 7日前表示 */}
      <Dialog
        open={showReservationBeforeCanceledNotification}
        onOpenChange={setShowReservationBeforeCanceledNotification}
      >
        <ModalConfirm
          handleCancel={handleCloseReservationBeforeCanceledNotification}
          handleSubmit={handleCloseReservationBeforeCanceledNotification}
          className="w-[calc(100vw-1rem)] md:w-[45rem] max-w-max "
          title={t('Confirmation')}
          textSubmit={t('OK')}
        >
          <h2 className="text-lg font-medium text-black900 mb-4">
            {t('Would you like to cancel or change your reservation?')}
          </h2>
          <p className="text-base text-black900">
            {t('If you wish to change or cancel your order within 7 days of receiving it')}
          </p>
        </ModalConfirm>
      </Dialog>
      {/* 5_2_5 予約日変更確認 */}
      <Dialog open={showChangeDateConfirmDialog} onOpenChange={setShowChangeDateConfirmDialog}>
        <ModalConfirm
          handleCancel={handleChangeDateCancel}
          handleSubmit={handleChangeDateConfirmSubmit}
          className="w-[calc(100vw-1rem)] md:w-[45rem] max-w-max "
          title={t('Confirmation')}
          textCancel={t('Cancel')}
          textSubmit={t('OK')}
        >
          <h2 className="text-lg text-black900 font-medium mb-4">
            {t('We accept change requests.')}
          </h2>
          <p className="text-base text-black900">
            {t(
              'Please enter the consultation date you wish to change on the next screen. The reservation desk will contact you later. (There may be fewer empty slots.)',
            )}
          </p>
        </ModalConfirm>
      </Dialog>
      {/* 5_14_4 譲渡取り消し 確認 */}
      <Dialog
        open={showAssignmentCancelConfirmDialog}
        onOpenChange={setShowAssignmentCancelConfirmDialog}
      >
        <ModalConfirm
          handleCancel={handleCloseAssignmentCancelConfirmDialog}
          handleSubmit={handleCloseAssignmentCancelConfirmDialog}
          className="w-[calc(100vw-1rem)] md:w-[45rem] max-w-max "
          title={t('Confirmation')}
          textCancel={t('Cancel')}
          textSubmit={t('OK')}
        >
          <p className="text-base text-black900">{t('Do you want to cancel the transfer?')}</p>
        </ModalConfirm>
      </Dialog>
    </section>
  );
};

const MedicalExaminationStatus = ({
  step,
  handleOpenReservationCancel,
  handleChangeDateConfirm,
  handleOpenAssignmentCancelConfirmDialog,
}: {
  step: ExaminationStatus;
  handleOpenReservationCancel: () => void;
  handleChangeDateConfirm: () => void;
  handleOpenAssignmentCancelConfirmDialog: () => void;
}) => {
  switch (step) {
    case ExaminationStatus.NoUse:
      return <InProgressExamination />;
    case ExaminationStatus.RegistrationInProgress:
      return <RequestingExamination />;
    case ExaminationStatus.ReservationConfirmed:
      return <RequestAReservationExamination />;
    case ExaminationStatus.ReservationConfirmed1Visited:
      return <CancelingExamination />;
    case ExaminationStatus.ApplyingForReservationChange:
      return (
        <AssignmentExamination
          handleOpenAssignmentCancelConfirmDialog={handleOpenAssignmentCancelConfirmDialog}
        />
      );
    case ExaminationStatus.ReservationCanceling:
      return (
        <ReservationConfirmed
          onCancelHandler={handleOpenReservationCancel}
          onSubmitHandler={handleChangeDateConfirm}
        />
      );
    case ExaminationStatus.ExchangeInProgress:
      return (
        <WaitForReceivingExamination
          handleOpenAssignmentCancelConfirmDialog={handleOpenAssignmentCancelConfirmDialog}
        />
      );
    default:
      return <AlreadyReceivedExamination />;
  }
};

export default HealthCheckListPage;
