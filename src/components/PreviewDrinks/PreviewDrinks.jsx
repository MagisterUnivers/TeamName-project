import React from 'react';

import { Cardwrapper, Section, SectionTitle } from './Styles-PreviewDrinks';
import DrinkCard from 'components/DrinkCard/DrinkCard';
import { Link } from 'react-router-dom';

const PreviewDrinks = ({ title, ordinaryDrink = [] }) => {
  return (
    <Section>
      <Link to={`/drinks/encodeURIComponent(${title})`}>
        <SectionTitle>{title}</SectionTitle>
      </Link>

      <Cardwrapper>
        {ordinaryDrink.map(cocktail => (
          <DrinkCard cocktail={cocktail} key={cocktail._id} />
        ))}
      </Cardwrapper>
    </Section>
  );
};

export default PreviewDrinks;
