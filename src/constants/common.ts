/* eslint-disable no-useless-escape */
const API_ROUTES = {
  GET_TASKS: '/api/get-tasks',
};

const WEB_ROUTES = {
  HOME: '/',
  HEALTH_CHECK_LIST_PAGE: '/health-checklist',
  EMAIL_ADDRESS_TRANSFEREE: '/email-address-transferee',
  REQUEST_RESERVATION: '/request-reservation',
  SELECT_MEMBERS: '/select-members',
  NOTIFICATION_LIST: '/notification-list',
  FORGOT_PASSWORD: '/auth/forgot-password',
  VIEW_COMPONENT: '/view-component',
  REPORT_CONFIRM: '/report-confirm',
  TOP: '/top',
};

const ACCESS_TOKEN_STORAGE_KEY = 'accessToken';

const REFRESH_TOKEN_STORAGE_KEY = 'refreshToken';

const FORMAT_DATE = {
  DATE: 'yyyy/MM/dd',
};

const REGEX = {
  EMAIL: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  EMAIL_DONMAN: /[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-.\/:;<=>?@^_`{|}~\]\\[])[A-Za-z\d!"#$%&'()*+,-.\/:;<=>?@^_`{|}~\]\[]{8,}$/,
  KANNA_NAME: /^([ァ-ン]|ー)+$/,
};

export {
  API_ROUTES,
  WEB_ROUTES,
  ACCESS_TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY,
  FORMAT_DATE,
  REGEX,
};
