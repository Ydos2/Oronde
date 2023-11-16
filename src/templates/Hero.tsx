import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Le magasin de la mode\n'}
            <span className="text-primary-500">Oronde</span>
          </>
        }
        description="L'élégance est un tout, et ce qui ne se voit pas compte autant que ce qui se voit."
        button={
          <Link href="/">
            <Button xl>Découvrez notre collection</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
