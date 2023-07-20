import { AddRecipe } from 'components';
import { Hero, Herodescription, Herowrapper } from './Hero.styled';
import { StyledMainPageTitle } from 'components/MainPageTitle/MainPageTitle.styled';

export const HeroSection = () => {
  return (
    <Hero>
      <Herowrapper>
        <StyledMainPageTitle>
          Craft Your Perfect Drink with Drink Master
        </StyledMainPageTitle>
        <Herodescription>
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the world's finest
          beverages.
        </Herodescription>
        <AddRecipe />
      </Herowrapper>
    </Hero>
  );
};
