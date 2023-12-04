'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export function FinancialSection() {
  return (
    <section
      className="container flex flex-col gap-6 py-8 md:max-w-full md:py-12 lg:py-24"
      style={{
        backgroundImage: 'url("/img/financeiro.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 'calc(100vh - 56px)',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div className="flex flex-col gap-24 md:flex-row md:gap-12 lg:gap-24 justify-start items-start">
        <div className="lg:w-1/2 lg:text-left">
          <h1 className="text-3xl font-semibold text-white md:text-5xl lg:text-6xl lg:ml-4 lg:pb-4">
            Nós acreditamos que só uma pessoa pode ter controle sobre sua vida
            financeira: você.
          </h1>
          <Button variant="link" size="lg" className="text-[15px] xl:flex text-white">
            <Link href="/cartao" className="flex items-center gap-x-3">
              Saiba mais
              <Icons.arrowRight className="h-[14px] w-[14px]" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}