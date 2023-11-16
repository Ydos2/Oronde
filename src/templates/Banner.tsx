import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Découvrez notre selection"
      button={
        <Link href="https://google.com">
          <Button>Découvrir</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
