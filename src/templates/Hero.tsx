import { Typography } from '@mui/material';
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
          <Link href="/marques">
            <Typography variant="h5" mb={2} fontWeight="bold">
              Marques
            </Typography>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-6 pb-3">
      <HeroOneButton
        title={
          <>
            {'Bienvenue sur le site de la mode \n'}
            <span className="text-primary-600">Oronde</span>
          </>
        }
        description="où chaque vêtement raconte une histoire d'élégance. Car chez nous, l'élégance ne se limite pas à ce qui se voit, mais englobe également la beauté cachée dans chaque détail."
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
