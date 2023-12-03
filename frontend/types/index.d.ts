export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
  };
};

export type MainConfig = {
  mainNav: MainNavItem[];
};

export type NavItem = {
  type: 'link' | 'dropdown';
  hideNavMenuLink?: boolean;
  title: string;
  href?: string;
  disabled?: boolean;
  description: string;
  dropdownItems?: NavItem[];
};

export type MainNavItem = NavItem;

export type FooterConfig = {
  footerNav: FooterNavItem[];
};

export type FooterNavItem = {
  title: string;
  links: string[];
}

export type MainFooterNavItem = FooterNavItem;