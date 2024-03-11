export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Next.js',
  description:
    'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
  mainNav: [
    {
      title: 'Dashboard',
      href: '/dashboard',
    },
    {
      title: 'Tasks',
      href: '/tasks',
    },
    {
      title: 'Settings',
      href: '/settings',
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
};
