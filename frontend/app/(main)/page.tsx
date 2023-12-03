import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default async function IndexPage() {
  return (
    <section
      className="container flex flex-col gap-6 py-8 md:max-w-full md:py-12 lg:py-24"
      style={{
        backgroundImage:
          'url("/img/home-nubank.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 'calc(100vh - 56px)',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h1 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl lg:ml-4 lg:pb-4">
          O futuro é a razão que a <br /> gente faz planos.
        </h1>
        <p className="text-white font-semibold text-lg md:text-2xl lg:text-3xl lg:ml-4">
          Cartão de crédito, conta digital e mais. <br /> Tudo pra simplificar a
          sua vida.
        </p>
      </div>
    </section>
  );
}
