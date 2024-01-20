import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Slider from 'react-slick';

import { Section } from '@/layout/Section';

// Importez le composant Image
import { brands } from '../data/brand';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Active l'autoplay
  autoplaySpeed: 5000, // Délai entre chaque transition (en millisecondes)
};

function Base() {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <VerticalFeatures />
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
        </Box>
        <Typography variant="h4" mb={2}>
          Location du magasin:
        </Typography>
        <iframe
          width="400"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDAzPRtjJe4OnzZngHZYU-XoBzsl3vNgYU&q=48+rue+de+Verdun+Carcassonne`}
          allowFullScreen
        ></iframe>
      </Section>
      {/* <Banner /> */}

      <Footer />
    </div>
  );
}

export { Base };
