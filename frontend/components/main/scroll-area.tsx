'use client';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Icons } from '@/components/icons';

export function ScrollAreaCarousel() {
  const itemsArray = [
    {
      icon: Icons.helping_hand,
      title: 'Empréstimo',
      description:
        'Transparentes, seguros e do seu jeito. Opções de empréstimos que deixam você no controle do início ao fim.',
    },
    {
      icon: Icons.helping_hand,
      title: 'Investimentos',
      description:
        'Investimentos a partir de R$ 1 e opções para todos os perfis. Uma experiência fácil, segura e transparente.',
    },
    {
      icon: Icons.helping_hand,
      title: 'Seguros',
      description:
        'Seguros de vida e residencial com coberturas e assistências que você pode personalizar.',
    },
    {
      icon: Icons.helping_hand,
      title: 'Conta PJ',
      description:
        'A conta digital para o seu negócio. Sem tarifas de manutenção e com serviços que facilitam o seu dia a dia.',
    },
    {
      icon: Icons.helping_hand,
      title: 'Conta PJ',
      description:
        'A conta digital para o seu negócio. Sem tarifas de manutenção e com serviços que facilitam o seu dia a dia.',
    },
    {
      icon: Icons.helping_hand,
      title: 'Conta PJ',
      description:
        'A conta digital para o seu negócio. Sem tarifas de manutenção e com serviços que facilitam o seu dia a dia.',
    },
    {
      icon: Icons.helping_hand,
      title: 'Conta PJ',
      description:
        'A conta digital para o seu negócio. Sem tarifas de manutenção e com serviços que facilitam o seu dia a dia.',
    },
    {
      icon: Icons.helping_hand,
      title: 'Conta PJ',
      description:
        'A conta digital para o seu negócio. Sem tarifas de manutenção e com serviços que facilitam o seu dia a dia.',
    },
    {
      icon: Icons.helping_hand,
      title: 'Conta PJ',
      description:
        'A conta digital para o seu negócio. Sem tarifas de manutenção e com serviços que facilitam o seu dia a dia.',
    },
  ];

  return (
    <>
      <section className="border-t pt-10 dark:primary">
        <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <h2 className="text-2xl font-semibold dark:text-white">
            Saiba como podemos ajudar
          </h2>
          <div className="relative mt-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[5%] before:bg-gradient-to-r before:from-white before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[5%] after:bg-gradient-to-l after:from-white after:content-[''] dark:before:bg-gradient-to-r dark:before:from-black dark:after:bg-gradient-to-l dark:after:from-black">
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
          </div>
        </div>
      </section>
    </>
  );
}
