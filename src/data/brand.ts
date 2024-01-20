// my-clothing-store/data/brands.ts

export interface Brand {
  id: number;
  name: string;
  image: string;
  description: string;
  history: string;
  sizes: string[];
  examples: string[];
}

export const brands: Brand[] = [
  {
    id: 1,
    name: 'Elena Miro',
    image: '/assets/images/elena-miro.png', // Ajoutez le chemin correct vers l'image
    description:
      "Elena Miro incarne l'élégance et la sophistication dans l'univers de la mode féminine. La marque italienne, réputée pour son engagement envers la diversité des tailles, propose des collections raffinées qui célèbrent la beauté de chaque femme. Des coupes impeccables, des tissus de qualité et une attention méticuleuse aux détails définissent le style intemporel d'Elena Miro.",
    history:
      "Fondée avec une vision révolutionnaire, Elena Miro s'est imposée comme une pionnière de la mode grande taille en offrant des créations qui transcendent les normes traditionnelles. Depuis ses débuts, la marque s'efforce de redéfinir les standards de beauté, mettant en avant la confiance en soi et l'individualité. Chaque saison, Elena Miro continue de repousser les limites de la mode inclusive avec des pièces uniques qui captivent et inspirent.",
    sizes: ['S', 'M', 'L', 'XL'],
    examples: [
      '/assets/images/Vetement/ElenaMiro/a.jpg',
      '/assets/images/Vetement/ElenaMiro/b.jpg',
      '/assets/images/Vetement/ElenaMiro/c.jpg',
    ],
  },
  {
    id: 2,
    name: 'Marina Rinaldi',
    image: '/assets/images/marina-rinaldi.png', // Ajoutez le chemin correct vers l'image
    description:
      "Marina Rinaldi, la griffe italienne renommée, se distingue par son mariage habile de la mode contemporaine et du savoir-faire artisanal. Conçues pour la femme moderne qui apprécie le luxe et la qualité, les collections de Marina Rinaldi incarnent l'élégance intemporelle. Des lignes épurées, des tissus somptueux et des coupes impeccables définissent le style sophistiqué de la marque.",
    history:
      "Fondée avec une passion pour la création de vêtements qui transcendent les saisons, Marina Rinaldi a tracé son chemin dans le monde de la mode en offrant une interprétation contemporaine du luxe italien. Depuis ses débuts, la marque s'est affirmée comme une référence en matière de mode grande taille, créant des pièces qui allient confort et esthétique haut de gamme. Marina Rinaldi continue de repousser les frontières de l'élégance avec des collections empreintes de charme et de modernité.\nN'hésitez pas à personnaliser ces descriptions selon vos besoins et à ajouter des détails spécifiques qui reflètent l'essence de votre boutique de vêtements.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    examples: [
      '/assets/images/Vetement/MarinaRinaldi/idro.png',
      '/assets/images/Vetement/MarinaRinaldi/raffa.png',
      '/assets/images/Vetement/MarinaRinaldi/veletta.png',
    ],
  },
  {
    id: 3,
    name: 'Herzen’s',
    image: '/assets/images/LogoBG-Outlet.png', // Ajoutez le chemin correct vers l'image
    description:
      'Herzen’s incarne la fusion parfaite entre le style contemporain et le confort ultime. Les collections de Herzen’s mettent en valeur des silhouettes modernes avec des coupes flatteuses, des tissus de qualité et une attention particulière aux détails. La marque offre une gamme variée de vêtements pour les femmes qui veulent allier élégance et bien-être au quotidien.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    history:
      "Herzen’s a été fondée avec la vision de créer des vêtements qui célèbrent la beauté naturelle de chaque femme, quelle que soit sa taille. Le nom 'Herzen’s' reflète le cœur de la marque, qui bat au rythme de l'inclusion, de la confiance et du style raffiné.",
    examples: [
      '/assets/images/Vetement/Herzen/a.png',
      '/assets/images/Vetement/Herzen/b.png',
      '/assets/images/Vetement/Herzen/c.png',
    ],
  },
  {
    id: 4,
    name: 'Béate Heyman',
    image: '/assets/images/BeateHeyman.png', // Ajoutez le chemin correct vers l'image
    description:
      "Béate Heyman offre une approche artistique et avant-gardiste de la mode grande taille. Les créations uniques de Béate Heyman captivent par leur originalité, leurs motifs audacieux et leurs silhouettes innovantes. Chaque vêtement est une œuvre d'art, créé pour exprimer la personnalité et l'individualité de celles qui le portent.",
    sizes: ['M', 'L', 'XL'],
    history:
      'Fondée par Béate Heyman, la marque éponyme repousse les limites de la mode conventionnelle en proposant des designs qui transmettent une énergie créative. Depuis ses débuts, Béate Heyman a été acclamée pour son approche novatrice de la mode grande taille, inspirant les femmes à embrasser leur style unique.',
    examples: [
      '/assets/images/Vetement/BeateHeyman/a.jpeg',
      '/assets/images/Vetement/BeateHeyman/b.jpeg',
      '/assets/images/Vetement/BeateHeyman/c.jpeg',
    ],
  },
];
