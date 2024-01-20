/* eslint-disable @typescript-eslint/no-shadow */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Slider from 'react-slick';

// Importez le composant Image
import { brands } from '../data/brand';
import { Section } from '../layout/Section';
import { OtherHero } from '../templates/OtherHero';

const Index = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Active l'autoplay
    autoplaySpeed: 5000, // Délai entre chaque transition (en millisecondes)
  };

  return (
    <div>
      <OtherHero />
      <Box textAlign="center">
        {/* Titre amélioré avec une taille et un style plus attractifs */}
        <Typography variant="h2" marginTop={4} fontWeight="bold" color="#333">
          Explorez les Tendances Inédites de Nos Marques Partenaires
        </Typography>
      </Box>

      <Section yPadding="pt-6 pb-6">
        <Box p={4}>
          <Slider {...sliderSettings}>
            {brands.map((brand) => (
              <Card
                key={brand.id}
                sx={{
                  textAlign: 'center',
                  alignItems: 'center',
                  width: 343,
                  // to make the demo resizable
                  overflow: 'auto',
                  '--icon-size': '100px',
                }}
              >
                <CardMedia
                  component="img"
                  height="50"
                  image={brand.image}
                  alt={brand.name}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" color="#333">
                    {brand.name}
                  </Typography>
                  <Typography variant="body1">{brand.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>

          {/* Boîte de séparation décorative avec styles améliorés */}
          <Box my={6} textAlign="center">
            <div
              style={{
                borderTop: '2px solid #555', // Couleur de la bordure
                width: '30%',
                margin: '0 auto',
                opacity: 0.7, // Opacité pour un aspect plus discret
              }}
            ></div>
          </Box>

          {/* Nouvelle section pour les détails de chaque marque */}
          {brands.map((brand, index) => (
            <Box key={brand.id} mt={index > 0 ? 6 : 0}>
              <Typography variant="h3" mb={2} fontWeight="bold" color="#333">
                {brand.name}
              </Typography>
              <Typography variant="body1" mb={1}>
                <strong>Description de la marque :</strong> {brand.description}
              </Typography>
              <Typography variant="body1" mb={1}>
                <strong>Les tailles disponibles :</strong>{' '}
                {brand.sizes.join(', ')}
              </Typography>
              {/* Ajoutez des exemples d'images de vêtements */}
              <Box display="flex" justifyContent="space-between">
                {brand.examples.map((example, index) => (
                  <Card key={index} sx={{ width: '30%', marginBottom: '10px' }}>
                    <CardMedia
                      component="img"
                      height="80"
                      image={example}
                      alt={`Example ${index + 1}`}
                    />
                  </Card>
                ))}
              </Box>
              <Typography variant="body1" mb={1}>
                <strong>Histoire de la marque :</strong> {brand.history}
              </Typography>

              {/* Ajoutez d'autres informations spécifiques à la marque au besoin */}
            </Box>
          ))}
        </Box>
      </Section>
    </div>
  );
};

export default Index;
