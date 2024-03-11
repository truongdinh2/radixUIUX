import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

enum InterviewStatus {
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

export const AssignmentExamination = ({
  handleOpenAssignmentCancelConfirmDialog,
}: {
  handleOpenAssignmentCancelConfirmDialog: () => void;
}) => {
  const { t } = useTranslation('healthChecklist');
  const renderSubTitle = (interviewStatus: InterviewStatus) => {
    switch (interviewStatus) {
      case InterviewStatus.NoUse:
        return (
          <span className="text-xs px-3 ml-3 border border-white rounded leading-6">
            {t('Reservation completed')}
          </span>
        );
      case InterviewStatus.RegistrationInProgress:
      case InterviewStatus.ReservationConfirmed:
      case InterviewStatus.ReservationConfirmed1Visited:
      case InterviewStatus.ApplyingForReservationChange:
      case InterviewStatus.ReservationCanceling:
        return (
          <span className="text-xs px-3 ml-3 border border-white rounded leading-6">
            {t('Reservation in progress')}
          </span>
        );
      case InterviewStatus.ExchangeInProgress:
        return (
          <span className="text-xs px-3 ml-3 border border-white rounded leading-6">
            {t('Already used')}
          </span>
        );
      default:
        break;
    }
  };

  return (
    <div className="sm:container sm:px-10 bg-white pt-5">
      <h1 className="flex justify-center text-lg bg-base200 text-white border-black900 text-center py-2 font-semibold tracking-tight">
        <span>{t('Assignment')}</span>
        {renderSubTitle(InterviewStatus.NoUse)}
      </h1>
      <div className="p-3 sm:px-0 sm:py-1.5 bg-black100 relative">
        <div className="flex flex-col w-full">
          <div className="flex flex-col sm:p-3.5 sm:px-5 relative items-start">
            <div className="flex items-center text-base justify-items-center">
              <span className="bg-dusty_plum text-white py-1 w-[112px] text-center">
                {t('Consultation right number')}
              </span>
              <span className="ml-3 text-black900">123456789</span>
            </div>
            <div className="flex items-center text-base justify-items-center mt-3">
              <span className="bg-dusty_plum text-white py-1 w-[112px] text-center">
                {t('Membership number')}
              </span>
              <span className="ml-3 text-black900">26-4-1234-05-2</span>
            </div>
            <div className="flex items-center text-base justify-items-center mt-3">
              <span className="bg-dusty_plum text-white py-1 w-[112px] text-center">
                {t('Date of expiry')}
              </span>
              <span className="ml-3 text-black900">2018/08/01~2018/08/31</span>
            </div>
            <div className="flex items-center text-base justify-items-center mt-3">
              <span className="bg-dusty_plum text-white py-1 w-[112px] text-center">
                {t('Occupancy day period')}
              </span>
              <span className="ml-3 text-black900">2018/08/01~2018/08/31</span>
            </div>
          </div>
          <div className="flex flex-col items-end w-full mt-5 sm:mt-0 sm:p-3.5 sm:pt-1.5 sm:px-5">
            <Button
              className="w-[150px] shadow-gray-00 py-3 border-primary"
              onClick={handleOpenAssignmentCancelConfirmDialog}
            >
              <span className="text-primary text-base font-medium">
                {t('Cancellation of transfer')}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
