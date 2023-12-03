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
    <div
      className="container space-y-10 py-6 md:py-10"
      style={{
        backgroundImage:
          'url("https://manucav.github.io/nubank-responsivo/img/home-nubank.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 'calc(100vh - 56px)',
      }}
    >
      <section className="pt-10 pb-10 md:pt-20 md:pb-20">
        {/* <h2 className="mb-4 font-heading font-bold text-3xl">Last Post</h2> */}
        <article className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-2 font-heading text-4xl md:text-6xl">
              Título
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="mb-2 font-heading text-2xl md:text-4xl">Título</h3>
            <p className="text-muted-foreground md:text-lg">Descrição</p>
            <Link href="/" className="absolute inset-0">
              <span className="sr-only">View Article</span>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
