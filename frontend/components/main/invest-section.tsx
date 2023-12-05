'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

import { siteConfig } from '@/config/site';

export function InvestSection() {
  return (
    <section className="border-t py-16">
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-9 items-start">
          <div className="flex flex-col items-start">
            <img
              src="/img/people.webp"
              className="mt-4 rounded-lg"
              height="100"
              alt="Imagem"
            />
          </div>

          <div className="mr-4 lg:mt-15 lg:pt-12 flex flex-col items-center lg:items-start"> {/* Modified */}
            <h2 className="text-4xl font-bold leading-9 text-center md:text-left">
              Invista seu dinheiro
            </h2>
            <p className="text-lg mt-10 leading-6 text-center md:text-left">
              O plano é facilitar seus planos. Comece hoje com as Caixinhas do {siteConfig.name} e invista seu dinheiro com segurança e rentabilidade. Além disso, você pode acompanhar seus investimentos em tempo real e resgatar quando quiser.
            </p>
            <div className="mt-5 text-center md:text-left">
              <Button variant="link" size="lg" className="text-[15px] xl:flex">
                <Link href="/cartao" className="flex items-center gap-x-3">
                  Saiba mais
                  <Icons.arrowRight className="h-[14px] w-[14px]" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
