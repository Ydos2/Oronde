import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="Anne Marie" description="La spécialiste de la grande taille.">
    <VerticalFeatureRow
      title="Spécial grande taille"
      description="35 ans d'experience, du 36 au 54, mode sportwear."
      image="/assets/images/IMG_0215.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Nouveauté cette année : du 36 au 40"
      description="La demande de cetaines clientes m'a amené à débuté mon offre produit a partir du 36."
      image="/assets/images/IMG_0239.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Comme disait Coco Chanel"
      description="La mode se démode, le style jamais."
      image="/assets/images/IMG_0242.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
