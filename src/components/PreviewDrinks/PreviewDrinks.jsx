import React from 'react';

import { Cardwrapper, Section, SectionTitle } from './Styles-PreviewDrinks';
import DrinkCard from 'components/DrinkCard/DrinkCard';

const PreviewDrinks = () => {
  return (
    <Section>
      <SectionTitle>SectionTitle</SectionTitle>
      <Cardwrapper>
        <DrinkCard />
        <DrinkCard />
        <DrinkCard />
      </Cardwrapper>
    </Section>
  );
};

export default PreviewDrinks;
