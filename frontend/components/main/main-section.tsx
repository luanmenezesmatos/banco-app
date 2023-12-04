'use client';

import { InsertCPFForm } from '@/components/main/insert-cpf-form';

export function MainSection() {
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
          <h1 className="font-sans font-bold text-3xl text-white md:text-5xl lg:text-6xl lg:ml-4 lg:pb-4">
            O futuro é a razão que a gente faz planos.
          </h1>
          <p className="text-white font-sans font-semibold text-lg md:text-2xl lg:text-3xl lg:ml-4">
            Cartão de crédito, conta digital e mais. Tudo pra simplificar a sua
            vida.
          </p>
        </div>
        <div className="lg:ml-4">
          <InsertCPFForm />
        </div>
      </div>
    </section>
  );
}
