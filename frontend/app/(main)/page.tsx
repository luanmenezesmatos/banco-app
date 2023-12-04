import { ScrollAreaCarousel } from '@/components/main/scroll-area';
import { MainSection } from '@/components/main/main-section';
import { CardSection } from '@/components/main/card-section';

export default async function IndexPage() {
  return (
    <>
      <MainSection />
      <ScrollAreaCarousel />
      <CardSection />
    </>
  );
}
