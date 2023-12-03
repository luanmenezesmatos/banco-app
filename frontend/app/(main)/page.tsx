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
        backgroundImage: 'url("/img/home-nubank.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 'calc(100vh - 56px)',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div className="flex flex-col gap-24 md:flex-row md:gap-12 lg:gap-24 justify-center items-center">
        <div className="lg:w-1/2 pt-6">
          <h1 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl lg:ml-4 lg:pb-4">
            O futuro é a razão que a gente faz planos.
          </h1>
          <p className="text-white font-semibold text-lg md:text-2xl lg:text-3xl lg:ml-4">
            Cartão de crédito, conta digital e mais. Tudo pra simplificar a sua
            vida.
          </p>
        </div>
        <div className="lg:w-1/2 lg:ml-4">
          {' '}
          {/* Adicionando lg:ml-4 para margem à esquerda */}
          <Card>
            <CardHeader>
              <CardTitle>Novo Card</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione et ad voluptas! Natus unde nemo ut dolores cumque ad est eum accusamus omnis quisquam maxime, alias vitae necessitatibus excepturi!</CardDescription>
            </CardContent>
            <CardFooter>
              <Button>Saiba mais</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
