import React, { useEffect } from 'react';
import arrow from '@/assets/icon_arrow_right.svg';
import noti from '@/assets/icon_noti.svg';
import { WEB_ROUTES } from '@/constants';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface INotificationItem {
  title: string;
  sentDate: string;
  content: string;
  isNew?: boolean;
}

const NotificationList = () => {
  const { t } = useTranslation('notification');
  const [notificationState, setNotificationState] = React.useState<INotificationItem[]>([]);
  useEffect(() => {
    const sampleNotification = {
      title: 'タイトルHM・ミッドタウンコース新設のお知らせ',
      sentDate: '2024/08/15',
      isNew: true,
      content:
        '本文テキストのお知らせの文章が入ります。本文テキストのお知らせの文章が入ります。本文テキストのお知らせの文章が入ります。本文テキストのお知らせの文章が入ります。 本文テキストのお知らせの文章が入ります。本文テキストのお知らせの文章が入ります。 本文テキストのお知らせの文章が入ります。本文テキストのお知らせの文章が入ります。',
    };
    setNotificationState([sampleNotification, sampleNotification, sampleNotification]);
  });
  return (
    <section className="fontsize-m bg-white sm:bg-transparent px-5 py-10">
      <div className="sm:container sm:px-10 sm:pt-10 bg-white">
        <h1 className="text-xxl text-black900 border-black900 leading-[33.6px] pl-6 mb-8 border border-y-0 border-r-0 font-bold tracking-tight">
          {t('Notification list')}
        </h1>
        <div className="sm:pb-10 relative">
          {notificationState.length == 0 && (
            <div className="flex flex-col p-4 mb-2">
              <h2 className="text-base text-black900 font-medium">{t('Not found notification')}</h2>
            </div>
          )}
          {notificationState.length > 0 &&
            notificationState.map((item: INotificationItem, index: number) => {
              return (
                <Link key={index} to={`${WEB_ROUTES.NOTIFICATION_LIST}/3345633`}>
                  <div className="flex flex-col p-4 pr-10 shadow-gray-01 rounded border border-black300 mb-2 relative">
                    <div className="flex">
                      <span className="text-xs text-black700">{item.sentDate}</span>
                      {item.isNew && <img src={noti} alt="noti" className="ml-4" />}
                    </div>
                    <div className="flex">
                      <h2 className="text-base text-black900 font-medium">{item.title}</h2>
                    </div>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="ml-4 w-6 h-6 text-black700 absolute top-1/2 -mt-3 right-2"
                    />
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default NotificationList;
