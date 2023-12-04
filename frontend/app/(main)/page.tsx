import { ScrollAreaCarousel } from '@/components/main/scroll-area';
import { MainSection } from '@/components/main/main-section';
import { CardSection } from '@/components/main/card-section';
import { FinancialSection } from '@/components/main/financial-section';
import { BankAccount } from '@/components/main/bank-account';

export default async function IndexPage() {
  return (
    <>
      <MainSection />
      <ScrollAreaCarousel />
      <CardSection />
      <FinancialSection />
      <BankAccount />
    </>
  );
}
