import React from 'react';

import { Cardwrapper, Section, SectionTitle } from './Styles-PreviewDrinks';
import DrinkCard from 'components/DrinkCard/DrinkCard';

const PreviewDrinks = ({ title, mockData = [] }) => {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>

      <Cardwrapper>
        {mockData.map(cocktail => (
          <DrinkCard cocktail={cocktail} key={cocktail._id} />
        ))}
      </Cardwrapper>
    </Section>
  );
};

export default PreviewDrinks;
