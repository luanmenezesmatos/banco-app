import * as React from 'react';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

const footerLinks = [
  {
    title: 'Para você',
    links: [
      {
        title: 'Conta',
        href: '/conta',
      },
      {
        title: 'Cartão de Crédito',
        href: '/cartao-de-credito',
      },
      {
        title: 'Pix',
        href: '/pix',
      },
      {
        title: 'Empréstimo',
        href: '/emprestimo',
      },
      {
        title: 'Investimentos',
        href: '/investimentos',
      },
    ],
  },
  {
    title: 'Para seu negócio',
    links: [
      {
        title: 'Conta PJ',
        href: '/conta-pj',
      },
      {
        title: 'Cartão de Crédito PJ',
        href: '/cartao-de-credito-pj',
      },
      {
        title: 'Tap to Pay',
        href: '/tap-to-pay',
      },
    ],
  },
  {
    title: `O ${siteConfig.name}`,
    links: [
      {
        title: `Sobre o ${siteConfig.name}`,
        href: '/sobre',
      },
      {
        title: 'Trabalhe conosco',
        href: '/trabalhe-conosco',
      },
      {
        title: 'Segurança',
        href: '/seguranca',
      },
      {
        title: 'Blog',
        href: '/blog',
      },
      {
        title: 'Newsletter',
        href: '/newsletter',
      },
      {
        title: 'Comunidade',
        href: '/comunidade',
      },
      {
        title: 'Perguntas',
        href: '/perguntas',
      },
      {
        title: 'Contato',
        href: '/contato',
      },
    ],
  },
  {
    title: 'Ajuda',
    links: [
      {
        title: 'Central de Ajuda',
        href: '/central-de-ajuda',
      },
      {
        title: 'Política de Privacidade',
        href: '/politica-de-privacidade',
      },
      {
        title: 'Termos de Uso',
        href: '/termos-de-uso',
      },
    ],
  },
];

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const githubUrl = siteConfig.links.github;

  return (
    <>
      <footer className="border-t py-10">
        <div className="mx-auto w-full max-w-none px-5 text-sm sm:max-w-[90%] sm:px-0 2xl:max-w-7xl">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] items-stretch justify-between gap-x-2 gap-y-10 sm:gap-x-6 md:flex md:flex-wrap">
            <div className="col-span-full">
              <Link href="/">
                <div className="flex items-center">
                  <Icons.logo />{' '}
                  <h1 className="ml-2 font-bold text-lg">
                    {siteConfig.name}
                  </h1>
                </div>
              </Link>
            </div>
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-2.5">
                <h3 className="mb-1 text-sm font-medium lg:text-sm">
                  {section.title}
                </h3>
                {section.links.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            ))}
            <div className="col-span-full flex w-full flex-col gap-2 lg:max-w-[240px]">
              <h3 className="mb-1.5 text-sm font-medium lg:text-sm">
                Inscreva-se na nossa newsletter
              </h3>
              <p className="mb-1.5 text-[13px] leading-6 lg:text-sm">
                Receba as últimas notícias do <b className="font-semibold">{siteConfig.name}</b> e atualizações
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
