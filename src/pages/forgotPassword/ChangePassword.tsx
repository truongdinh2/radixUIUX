import { ChangPasswordForm } from '@/pages/forgotPassword/components/ChangePasswordForm';

interface IFormInput {
  password: string;
  passwordConfirm: string;
}
export default function ChangPassword() {
  const handleSubmit = (data: IFormInput) => {
    console.log('data', data);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center sm:pt-[3.75rem]">
        <ChangPasswordForm onSubmitHandler={handleSubmit} />
      </div>
    </>
  );
}
