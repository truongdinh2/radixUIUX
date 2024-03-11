import { useState } from 'react';
import icon_close from '@/assets/icon_close.svg';
import icon_home from '@/assets/icon_home.svg';
import icon_members_card from '@/assets/icon_members_card.svg';
import noti from '@/assets/icon_noti.svg';
import icon_notification from '@/assets/icon_notification.svg';
import LogoHorizon from '@/assets/logo_smarthimedic_horizon.svg';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/MainNav';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button, buttonVariants } from '@/components/ui/button';
import { WEB_ROUTES } from '@/constants';
import { siteConfig } from '@/constants/site';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Drawer } from 'vaul';
import { useAuth } from '@/hooks/useAuth';

import { LanguageSwitcher } from './LanguageSwitcher';
import { UserNav } from './UserNav';

export function SiteHeader() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('topMenu');
  const showBaggedNoti = true;
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-base900">
      <div className="container-fluid px-5 py-2.5 flex items-center gap-4 justify-center sm:justify-between">
        {user && (
          <Drawer.Root direction="left" open={open} onOpenChange={setOpen}>
            <Drawer.Trigger asChild>
              <Button className="z-20 h-6 w-6 min-w-[24px] relative" variant="icon" size="icon">
                <Icons.menu className="h-6 w-6" />
                {showBaggedNoti && (
                  <img className="absolute -right-1.5 -top-1.5" src={noti} alt="noti" />
                )}
              </Button>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full w-full mt-24 fixed bottom-0 right-0 z-50">
                <div className="bg-white flex-1 h-full">
                  <div className="max-w-md mx-auto">
                    <div className="p-3.5 flex bg-base900">
                      <Drawer.Close>
                        <img className="mr-3" src={icon_close} alt="icon_close" />
                      </Drawer.Close>
                      <span className="text-sm text-white">山田太郎 様</span>
                    </div>
                    <div className="flex flex-col">
                      <Link
                        to={'/top'}
                        className="p-3.5 border-b border-black300 flex"
                        onClick={() => setOpen(false)}
                      >
                        <img className="mr-2" src={icon_home} alt="icon_home" />
                        <span className="text-sm">TOP</span>
                      </Link>
                      <Link
                        onClick={() => setOpen(false)}
                        to="/"
                        className="p-3.5 border-b border-black300 flex"
                      >
                        <img className="mr-2" src={icon_members_card} alt="icon_home" />
                        <span className="text-sm">{t('Smart membership information')}</span>
                      </Link>
                      <Link
                        onClick={() => setOpen(false)}
                        to={`${WEB_ROUTES.NOTIFICATION_LIST}`}
                        className="p-3.5 border-b border-black300 flex relative"
                      >
                        <img className="mr-2" src={icon_notification} alt="icon_home" />
                        <span className="text-sm ">
                          {t('Notification')}
                          {true && <img className="absolute right-4 top-4" src={noti} alt="noti" />}
                        </span>
                      </Link>
                      <Link
                        onClick={() => setOpen(false)}
                        to="/setting"
                        className="p-3.5 border-b border-black300 text-sm "
                      >
                        {t('Setting')}
                      </Link>
                      <Link
                        onClick={() => setOpen(false)}
                        to="/auth/logout"
                        className="p-3.5 border-b border-black300 text-sm"
                      >
                        {t('Logout')}
                      </Link>
                    </div>
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        )}

        <Link
          to="/"
          className="flex items-center space-x-2 w-full justify-center sm:ml-[-3rem] md:w-auto md:justify-start md:ml-0 h-[30px]"
        >
          <img src={LogoHorizon} alt="Logo horizontal" width={159} height={18} />
        </Link>

        {user && <MainNav className="hidden md:flex" items={siteConfig.mainNav} />}

        {user && (
          <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link to={siteConfig.links.github} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: 'icon',
                    variant: 'link',
                  })}
                >
                  <Icons.gitHub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>

              <Link to={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: 'icon',
                    variant: 'link',
                  })}
                >
                  <Icons.twitter className="h-4 w-4 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>

              <ThemeToggle />

              <LanguageSwitcher />

              <UserNav />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
