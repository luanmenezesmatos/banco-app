import { MainConfig } from '@/types';
import { siteConfig } from '@/config/site';

export const mainConfig: MainConfig = {
  mainNav: [
    {
      type: 'link',
      title: 'Página Inicial',
      href: '/',
      description: 'Página inicial do site',
    },
    {
      type: 'dropdown',
      title: 'Para você',
      href: '/para-voce',
      hideNavMenuLink: true,
      description: `Crie sua conta e aproveite os benefícios do ${siteConfig.name}.`,
      dropdownItems: [
        {
          type: 'link',
            title: `Conta do ${siteConfig.name}`,
          href: '/conta',
          description: 'Você no controle: receba, movimente e guarde seu dinheiro de um jeito simples.',
        },
        {
          type: 'link',
          title: 'Cartão de Crédito',
          href: '/cartao',
          description: 'Um cartão de crédito que te dá o controle total da sua vida financeira.',
        },
        {
          type: 'link',
          title: 'Tudo sobre Pix',
          href: '/pix',
          description: `O melhor jeito de fazer transferências e pagamentos instantâneos, do seu jeito. Use o Pix no ${siteConfig.name} para ter controle da sua vida financeira e aproveite os benefícios de uma conta segura e 100% digital.`
        },
        {
          type: 'link',
          title: 'Empréstimo',
          href: '/emprestimo',
          description: 'Fique no controle e escolha o empréstimo que melhor combina com o seu momento, seja para realizar um sonho ou resolver uma emergência.'
        },
        {
          type: 'link',
          title: 'Investimentos',
          href: '/investimentos',
          description: 'Você e seu dinheiro merecem a tranquilidade de uma experiência segura.'
        }
      ]
    },
    {
      type: 'dropdown',
      title: 'Para seu negócio',
      href: '/para-seu-negocio',
      hideNavMenuLink: true,
      description: `Abra uma conta e aproveite os benefícios do ${siteConfig.name}.`,
      dropdownItems: [
        {
          type: 'link',
          title: 'Conta PJ',
          href: '/conta-pj',
          description: 'Agora é mais fácil gerenciar a sua empresa.',
        },
        {
          type: 'link',
          title: 'Cartão de Crédito PJ',
          href: '/cartao-pj',
          description: 'Mais do que um cartão PJ, seu novo cartão de visitas.',
        },
        {
          type: 'link',
          title: 'Tap to Pay',
          href: `/${siteConfig.name.toLowerCase()}tap`,
          description: 'A tecnologia que facilita o pagamento por aproximação.',
        },
      ]
    },
    {
      type: 'dropdown',
      title: `O ${siteConfig.name}`,
      href: `o-${siteConfig.name.toLowerCase()}`,
      hideNavMenuLink: true,
      description: `Conheça o ${siteConfig.name} e sua história.`,
      dropdownItems: [
        {
          type: 'link',
          title: `Sobre o ${siteConfig.name}`,
          href: `/sobre-o-${siteConfig.name.toLowerCase()}`,
          description: `Conheça o ${siteConfig.name} e sua história.`,
        },
        {
          type: 'link',
          title: 'Trabalhe conosco',
          href: '/trabalhe-conosco',
          description: 'Faça parte do time que está transformando a forma como as pessoas lidam com o dinheiro.'
        },
        {
          type: 'link',
          title: 'Segurança',
          href: '/seguranca',
          description: 'Saiba como identificar golpes digitais e se proteger de fraudes.'
        },
        {
          type: 'link',
          title: 'Blog',
          href: '/blog',
          description: 'Acompanhe as novidades sobre o mundo financeiro.'
        },
        {
          type: 'link',
          title: 'Newsletter',
          href: '/assinar-newsletter',
          description: 'Receba as novidades do mundo financeiro diretamente no seu e-mail.'
        },
        {
          type: 'link',
          title: 'Comunidade',
          href: '/comunidade',
          description: `A comunidade oficial do ${siteConfig.name}.`
        },
        {
          type: 'link',
          title: 'Perguntas',
          href: '/perguntas',
          description: `Tire suas dúvidas sobre o ${siteConfig.name}.`
        },
        {
          type: 'link',
          title: 'Contato',
          href: '/contato',
          description: `Entre em contato com o ${siteConfig.name}.`
        }
      ]
    },
    {
      type: 'link',
      title: 'Ajuda',
      href: '/ajuda',
      description: `Precisa de ajuda? Encontre aqui todas as informações sobre o ${siteConfig.name}.`,
    }
  ],
};