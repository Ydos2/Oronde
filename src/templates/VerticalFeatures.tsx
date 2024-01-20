import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Anne Marie"
    description="Plongez dans le raffinement de la mode grande taille chez Oronde, l'œuvre d'Anne Marie Ressort. Notre boutique intimiste à la rue de Verdun célèbre plus qu'une simple activité commerciale ; elle incarne la dévotion à l'élégance et à la confiance depuis plus de trois décennies."
  >
    <VerticalFeatureRow
      title="Spécial grande taille"
      description="Oronde, spécialisé dans la mode grande taille, offre une expertise de 35 ans. Découvrez notre sélection allant du 36 au 54, mettant en lumière une approche moderne et tendance du sportswear."
      image="/assets/images/IMG_0215.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Nouveauté cette année : du 36 au 40"
      description="Nouveauté chez Oronde cette année : une gamme s'étendant du 36 au 40. En répondant à la demande croissante de certaines clientes, nous avons élargi notre offre pour inclure des tailles plus petites, offrant ainsi une sélection encore plus variée."
      image="/assets/images/IMG_0239.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Coco Chanel 'La mode se démode, le style jamais'"
      description="Parce que chez nous, votre style est une déclaration qui résiste à l'épreuve du temps, évoquant une beauté qui va au-delà des saisons et des caprices de la mode."
      image="/assets/images/IMG_0242.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
