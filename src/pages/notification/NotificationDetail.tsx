import { Icons } from '@/components/icons';
import { WEB_ROUTES } from '@/constants';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotificationDetail = () => {
  const { t } = useTranslation('notification');

  return (
    <section className="fontsize-m bg-white sm:bg-transparent px-5 py-10">
      <div className="sm:container sm:px-10 sm:pt-10 bg-white">
        <Link to={WEB_ROUTES.NOTIFICATION_LIST}>
          <div className="flex items-center mb-8 cursor-pointer">
            <Icons.iconBack />
            <h1 className="text-base font-bold ml-2 text-black900">{t('Back')}</h1>
          </div>
        </Link>
        <h1 className="text-xxl text-black900 border-black900 leading-[33.6px] pl-6 mb-8 border border-y-0 border-r-0 font-bold tracking-tight">
          {t('Notification detail')}
        </h1>
        <div className="sm:pb-10 relative">
          <div className="flex flex-col relative">
            <span className="text-base pb-4 text-black700">2024/08/15</span>
            <p className="text-base text-black900">
              本文テキストのお知らせの文章が入ります。本文テキストのお知らせの文章が入ります。本文テキストのお知らせの文章が入ります。本文テキストのお知らせの文章が入ります。
              本文テキストのお知らせの文章が入ります。本文テキストのお知らせの文章が入ります。
              本文テキストのお知らせの文章が入ります。本文テキストのお知らせの文章が入ります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationDetail;
