import { useState } from 'react';

import ExaminationInformation from './components/ExaminationInformation';
import ReceiveMedical from './components/ReceiveMedical';
import TransferCodeForm from './components/TransferCodeForm';

const STEP = {
  examinationInformation: 1,
  receiveMedical: 2,
  transferCodeForm: 3,
};

export default function SelectMembers() {
  const [step, setStep] = useState<number>(STEP.examinationInformation);

  return (
    <>
      {step === STEP.examinationInformation && (
        <ExaminationInformation step={step} setStep={setStep} />
      )}
      {step === STEP.receiveMedical && <ReceiveMedical step={step} setStep={setStep} />}
      {step === STEP.transferCodeForm && <TransferCodeForm step={step} setStep={setStep} />}
    </>
  );
}
