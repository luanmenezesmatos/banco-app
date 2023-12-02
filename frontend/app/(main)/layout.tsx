import Link from 'next/link';

import { mainConfig } from '@/config/main';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { MainNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/site-footer';
import { ModeToggle } from '@/components/mode-toggle';
import { Icons } from '@/components/icons';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={mainConfig.mainNav} />
          <nav className="flex items-center gap-6">
            <div className="hidden md:block">
              <ModeToggle />
            </div>
            <div className="hidden md:block">
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
            {/* <div className="hidden md:block">
              <Link
                href="/quero-ser-cliente"
                className={cn(
                  buttonVariants({ variant: 'default', size: 'sm' }),
                  'px-4'
                )}
              >
                Quero ser cliente
              </Link>
            </div> */}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
