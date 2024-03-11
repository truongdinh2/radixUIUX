import { SiteFooter } from '@/components/SiteFooter';
import { Navigate, useMatch, useOutlet } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

import { SiteHeader } from '../components/SiteHeader';

export default function ProtectedLayout() {
  const { user } = useAuth();
  const outlet = useOutlet();
  const isReportConfirmPage = useMatch('/report-confirm');

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        {!isReportConfirmPage && <SiteHeader />}
        <div className="flex-1 px-0 h-full">{outlet}</div>
        <SiteFooter />
      </div>
    </>
  );
}
