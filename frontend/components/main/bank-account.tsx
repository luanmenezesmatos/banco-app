'use client';

import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export function BankAccount() {
  return (
    <section className="mt-10">
      <div className="mx-auto max-w-none px-5 py-14 sm:max-w-[90%] sm:px-0 lg:max-w-4xl">
        <h1 className="text-center font-sans font-bold text-3xl md:text-4xl lg:text-4xl lg:ml-4">
          Conta do {siteConfig.name}
        </h1>
        <p className="mt-5 text-center text-lg leading-6">
          A conta que vai levar você ao controle da sua vida financeira. Manter
          suas contas em dia nunca foi tão simples. Com o {siteConfig.name} você
          pode pagar contas, fazer transferências, recarregar celular, criar
          objetivos e muito mais.
        </p>
        <div className="mt-5 flex justify-center">
          <Link
            href="/para-voce"
            className={cn(
              buttonVariants({
                variant: 'link',
              })
            )}
          >
            <span className="mr-2">Saiba mais</span>
            <Icons.arrowRight className="h-[14px] w-[14px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
