import { useState } from 'react';
import { Thanks } from '@/components/Thanks';
import { ResetPasswordForm } from '@/pages/account/components/ResetPasswordForm';

interface IFormInput {
  password: string;
  passwordConfirm: string;
}
export default function ResetPassword() {
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (data: IFormInput) => {
    console.log('data', data);
    setIsSuccess(true);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center sm:pt-[3.75rem]">
        {isSuccess ? <Thanks /> : <ResetPasswordForm onSubmitHandler={handleSubmit} />}
      </div>
    </>
  );
}
