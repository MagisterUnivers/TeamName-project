import React from 'react';

import { Cardwrapper, Section, SectionTitle } from './Styles-PreviewDrinks';
import DrinkCard from 'components/DrinkCard/DrinkCard';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

const PreviewDrinks = ({ title, data = [] }) => {
  const linkTransform = encodeURIComponent(title);

  return (
    <Section>
      <Link to={`/main/drinks/${linkTransform}`}>
        <SectionTitle>{title}</SectionTitle>
      </Link>
      <Cardwrapper>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          rewind={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {data.map(cocktail => (
            <SwiperSlide key={cocktail._id}>
              <DrinkCard cocktail={cocktail} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Cardwrapper>
    </Section>
  );
};

export default PreviewDrinks;
