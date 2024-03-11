import logo from '@/assets/logo_smarthimedic_vertical.svg';
import { useAuth } from '@/hooks/useAuth';

import { LoginForm } from './components/LoginForm';

interface IFormInput {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { login } = useAuth();

  const handleSubmit = (data: IFormInput) => {
    login({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <>
      <div className="bg-login w-full h-screen flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="Logo Smart Himedic"
          className="w-[11.75rem] h-[4.5rem] sm:w-[12.5rem] sm:h-[4.75rem]"
        />
        <div className="flex w-full py-10 flex-col justify-center space-y-6 px-5 sm:w-[37.5rem] sm:px-10">
          <LoginForm onSubmitHandler={handleSubmit} />
        </div>
      </div>
    </>
  );
}
