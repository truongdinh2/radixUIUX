import { Routes as BaseRoutes, Route } from 'react-router-dom';

import { WEB_ROUTES } from './constants';
import { BasicLayout } from './layouts/BasicLayout';
import ProtectedLayout from './layouts/ProtectedLayout';
import FrequentlyAskedQuestions from './pages/about/frequentlyAskedQuestion';
import Policy from './pages/about/policy';
import TermOfService from './pages/about/termsOfService';
import AccountAuthentication from './pages/account/AccountAuthentication';
import ResetPassword from './pages/account/ResetPassword';
import SendSMS from './pages/account/SendSMS';
import SettingAccount from './pages/account/SettingAccount';
import SMSVerifyCode from './pages/account/SMSVerifyCode';
import DashboardPage from './pages/dashboard/DashboardPage';
import EmailAddressTransferee from './pages/emailAddressTransferee/emailAddressTransferee';
import ChangePassword from './pages/forgotPassword/ChangePassword';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import VerifyPassword from './pages/forgotPassword/VerifyPassword';
import HealthCheckListPage from './pages/healthCheckList/HealthCheckListPage';
import LoginPage from './pages/login/LoginPage';
import AccountCreate from './pages/member/AccountCreate';
import AccountDetail from './pages/member/AccountDetail';
import AccountList from './pages/member/AccountList';
import SelectMembers from './pages/members/SelectMembers';
import NotificationDetail from './pages/notification/NotificationDetail';
import NotificationList from './pages/notification/NotificationList';
import RegisterInformation from './pages/register/RegisterInformation';
import { ReportConfirm } from './pages/reportConfirm/ReportConfirm';
import RequestReservation from './pages/requestReservation/requestReservation';
import SettingsAccountPage from './pages/settings/account/SettingsAccountPage';
import SettingsAppearancePage from './pages/settings/appearance/SettingsAppearancePage';
import SettingsDisplayPage from './pages/settings/display/SettingsDisplayPage';
import SettingsNotificationsPage from './pages/settings/notifications/SettingsNotificationsPage';
import ProfilePage from './pages/settings/ProfilePage';
import SettingsPage from './pages/settings/SettingsPage';
import TaskPage from './pages/tasks/TaskPage';
import { TopPage } from './pages/top/TopPage';
import ViewComponent from './pages/viewComponent/ViewComponent';

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route index path={WEB_ROUTES.TOP} element={<TopPage />} />
        <Route index path="/dashboard" element={<DashboardPage />} />
        <Route path="settings" element={<SettingsPage />}>
          <Route index element={<ProfilePage />} />
          <Route path="/settings/account" element={<SettingsAccountPage />} />
          <Route path="/settings/appearance" element={<SettingsAppearancePage />} />
          <Route path="/settings/notifications" element={<SettingsNotificationsPage />} />
          <Route path="/settings/display" element={<SettingsDisplayPage />} />
        </Route>
        <Route path="/tasks" element={<TaskPage />} />
        <Route index path="/health-checklist" element={<HealthCheckListPage />} />
        <Route index path="/notification-list" element={<NotificationList />} />
        <Route index path="/notification-list/:notification_id" element={<NotificationDetail />} />
        <Route index path="/select-members" element={<SelectMembers />} />
        <Route index path="/email-address-transferee" element={<EmailAddressTransferee />} />
        <Route index path="/request-reservation" element={<RequestReservation />} />
        <Route index path="/setting-account" element={<SettingAccount />} />
        <Route index path={WEB_ROUTES.REPORT_CONFIRM} element={<ReportConfirm />} />
        <Route index path="/faqs" element={<FrequentlyAskedQuestions />} />
        <Route index path="/policy" element={<Policy />} />
        <Route index path="/terms-of-service" element={<TermOfService />} />
        <Route index path="/accounts" element={<AccountList />} />
        <Route index path="/accounts/:memberId" element={<AccountDetail />} />
        <Route index path="/accounts/create" element={<AccountCreate />} />
        <Route path={WEB_ROUTES.VIEW_COMPONENT} element={<ViewComponent />} />
      </Route>
      <Route path="/auth" element={<BasicLayout />}>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/verify-password" element={<VerifyPassword />} />
        <Route path="/auth/change-password" element={<ChangePassword />} />
        <Route path="/auth/account-authentication" element={<AccountAuthentication />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/auth/policy" element={<Policy />} />
        <Route path="/auth/send-sms" element={<SendSMS />} />
        <Route path="/auth/sms-verify-code" element={<SMSVerifyCode />} />
        <Route path="/auth/register-member" element={<RegisterInformation />} />
      </Route>
    </BaseRoutes>
  );
}
