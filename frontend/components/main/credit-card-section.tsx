'use client';

import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export function CreditCardSection() {
  return (
    <section className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 py-12 text-center md:pt-32">
      <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-6xl">
        Conta do {siteConfig.name}
      </h1>
      <p className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
        A conta que vai levar você ao controle da sua vida financeira. Manter
        suas contas em dia nunca foi tão simples. Com o {siteConfig.name} você
        pode pagar contas, fazer transferências, recarregar celular, criar
        objetivos e muito mais.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/dashboard/stores"
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
    </section>
  );
}
