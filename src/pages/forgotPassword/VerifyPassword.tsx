import { VerifyPasswordForm } from '@/pages/forgotPassword/components/VerifyPasswordForm';

interface IFormInput {
  email: string;
  answer: string;
}
export default function VerifyPassword() {
  const handleSubmit = (data: IFormInput) => {
    console.log('data', data);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center sm:pt-[3.75rem]">
        <VerifyPasswordForm onSubmitHandler={handleSubmit} />
      </div>
    </>
  );
}
