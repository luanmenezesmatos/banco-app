import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export default async function IndexPage() {
  return (
    <section
      className="container flex flex-col md:flex-row gap-6 py-8 md:max-w-full md:py-12 lg:py-24"
      style={{
        backgroundImage:
          'url("https://manucav.github.io/nubank-responsivo/img/home-nubank.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 'calc(100vh - 56px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div className="flex flex-col gap-6 md:w-1/2 md:mr-8">
        <h1 className="text-4xl font-bold text-white">
          <span className="block">O novo jeito de</span>
          <span className="block">ter uma conta</span>
        </h1>
        <p className="text-white">
          <span className="block">Bem-vindo ao Nubank. </span>
          <span className="block">A vida financeira sem complicação.</span>
        </p>
        <div className="flex gap-6">
          <Link
            href="/entrar"
            className={cn(
              buttonVariants({ variant: 'default', size: 'sm' }),
              'px-4'
            )}
          >
            Acessar minha conta{' '}
            <span className="hidden md:inline-block">
              <Icons.login className="w-4 h-4 ml-1" />
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:w-1/2">
        <img
          src="https://manucav.github.io/nubank-responsivo/img/nubank-card.png"
          alt="Cartão Nubank"
          className="w-full max-w-[300px]"
        />
        <p className="text-white">
          <span className="block">Cartão de crédito com</span>
          <span className="block">anuidade grátis e</span>
          <span className="block">conta completa pra você.</span>
        </p>
      </div>
    </section>
  );
}
