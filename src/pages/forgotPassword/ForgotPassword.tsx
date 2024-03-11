import { ForgotPasswordForm } from '@/pages/forgotPassword/components/ForgotPasswordForm';

interface IFormInput {
  email: string;
  answer: string;
}
export default function ForgotPasswordPage() {
  const handleSubmit = (data: IFormInput) => {
    console.log('data', data);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center sm:pt-[3.75rem]">
        <ForgotPasswordForm onSubmitHandler={handleSubmit} />
      </div>
    </>
  );
}
