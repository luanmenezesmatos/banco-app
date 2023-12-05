import './globals.css';

import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { fontHeading, fontMono, fontSans } from '@/lib/fonts';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import { ScrollToTopButton } from '@/components/main/scroll-to-top-button';

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: 'Luan Menezes',
      url: 'https://github.com/luanmenezesmatos',
    },
  ],
  creator: 'Luan Menezes',
  icons: {
    icon: '/logo.ico',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontMono.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
