'use client';

import Link from 'next/link';

import { siteConfig } from '@/config/site';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '../ui/button';
import { Icons } from '@/components/icons';

export function BlogSection() {
  const itemsArray = [
    {
      id: 1,
      title: 'Empréstimo',
      description:
        'Transparentes, seguros e do seu jeito. Opções de empréstimos que deixam você no controle do início ao fim.',
      image_url: '/img/blog-1.webp'
    },
    {
      id: 2,
      title: 'Investimentos',
      description:
        'Investimentos a partir de R$ 1 e opções para todos os perfis. Uma experiência fácil, segura e transparente.',
      image_url: '/img/blog-2.jfif'
    },
    {
      id: 3,
      title: 'Seguros',
      description:
        'Seguros de vida e residencial com coberturas e assistências que você pode personalizar.',
      image_url: '/img/blog-3.webp'
    },
    {
      id: 4,
      title: 'Câmbio',
      description:
        'Compre e venda moedas estrangeiras com as melhores taxas e sem sair de casa.',
      image_url: '/img/blog-4.jpg'
    }
  ];

  return (
    <section className="border-t pt-10 dark:primary">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <div>
          <h2 className="font-sans font-bold text-center md:text-left text-3xl md:text-4xl lg:text-4xl">
            Fique por dentro das Novidades
          </h2>
          <p className="mt-5 text-lg text-center md:text-left">
            Acompanhe as novidades do {siteConfig.name} e fique por dentro de
            tudo o que acontece no mundo financeiro.
          </p>
          <div className="mt-5 flex justify-center md:justify-start">
            <Button variant="link" size="lg">
              <Link
                href="/blog"
                className="font-sans font-semibold flex items-center gap-x-3 font-[15px]"
              >
                Ir para o Blog do {siteConfig.name}
                <Icons.arrowRight className="h-[14px] w-[14px]" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="group -mx-2 mt-8 grid grid-cols-1 items-center justify-between sm:grid-cols-2 md:grid-cols-4 [&_a:hover_img]:!opacity-100">
          {itemsArray.map(({ id, title, description, image_url }) => (
            <Link
              key={id}
              href="/"
              className="px-1.5 pb-4 pt-1"
            >
              <div className="h-full w-full group-hover:[&_img]:opacity-50">
                <AspectRatio ratio={1 / 1}>
                  <img
                    src={image_url}
                    alt={title}
                    sizes="(max-width: 549px) 100vw, (max-width: 1127px) 50vw, 25vw"
                    className="h-full w-full rounded-2xl border object-cover object-center transition-opacity duration-150"
                  />
                </AspectRatio>
              </div>
              <div className="mt-3">
                <h3 className="text-[15px] font-semibold">{title}</h3>
                {description && (
                  <p className="mt-1 text-sm text-neutral-600">
                    {description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
        {/* <div className="relative mt-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[5%] before:bg-gradient-to-r before:from-white before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[5%] after:bg-gradient-to-l after:from-white after:content-[''] dark:before:bg-gradient-to-r dark:before:from-black dark:after:bg-gradient-to-l dark:after:from-black">
          <ScrollArea>
            <div className="mb-4 whitespace-nowrap p-[2px]">
              {itemsArray.map((item, index) => (
                <div
                  key={index}
                  className="relative mr-2.5 inline-block h-[160px] w-[250px] overflow-hidden"
                >
                  <div className="absolute inset-0 z-20 rounded-2xl border">
                    <span className="sr-only">{item.title}</span>
                  </div>
                  <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                    <span className="rounded-md border bg-white dark:primary px-2.5 py-1.5 text-[15px] font-semibold text-black dark:text-black flex items-center">
                      <item.icon className="w-5 h-5 mr-1" />
                      {item.title}
                    </span>
                  </div>
                  <div className="pt-12 mt-2 ml-4 text-md whitespace-normal">
                    <p className="text-black dark:text-white">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div> */}
      </div>
    </section>
  );
}
