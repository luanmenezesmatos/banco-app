'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

import { siteConfig } from '@/config/site';

export function CardSection() {
  return (
    <section className="border-t py-16">
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-9 items-start">
          <div className="mr-4 lg:mt-15 lg:pt-12 flex flex-col items-center lg:items-start">
            <h2 className="text-4xl font-bold leading-9">
              Conheça o nosso
              <br />
              Cartão de Crédito
            </h2>
            <p className="text-lg mt-10 leading-6">
              O seu cartão de crédito com a melhor taxa de juros do mercado. Com
              ele você pode fazer compras em qualquer lugar do mundo e parcelar
              em até 12x sem juros. Além disso, você pode fazer saques em
              qualquer caixa eletrônico 24h. Tudo isso com a segurança e a
              confiança que só o {siteConfig.name} pode oferecer.
            </p>
            <div className="mt-5">
              <Button variant="link" size="lg" className="text-[15px] xl:flex">
                <Link href="/cartao" className="flex items-center gap-x-3">
                  Saiba mais
                  <Icons.arrowRight className="h-[14px] w-[14px]" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <img
              src="/img/man-smiling.svg"
              className="mt-4 rounded-lg"
              height="100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
