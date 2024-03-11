import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { Navigate, useLocation, useOutlet } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export const BasicLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();
  const router = useLocation();

  if (user) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      {router.pathname != '/auth/login' && <SiteHeader />}
      <div className="flex flex-col justify-between bg-white sm:bg-pcMain ">
        <div className="min-h-[calc(100vh-6.1875rem)] pb-10">{outlet}</div>
        {router.pathname != '/auth/login' && <SiteFooter />}
      </div>
    </>
  );
};
