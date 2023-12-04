import { ScrollAreaCarousel } from '@/components/main/scroll-area';
import { MainSection } from '@/components/main/main-section';
import { CardSection } from '@/components/main/card-section';
import { FinancialSection } from '@/components/main/financial-section';
import { CreditCardSection } from '@/components/main/credit-card-section';

export default async function IndexPage() {
  return (
    <>
      <MainSection />
      <ScrollAreaCarousel />
      <CardSection />
      <FinancialSection />
      <CreditCardSection />
    </>
  );
}
