import { StyledMainPageTitle } from 'components/MainPageTitle/MainPageTitle.styled';
import { Hero, Herodescription, Herowrapper } from './Hero.styled';
// import AddRecipe from 'components/Buttons/HeroButton/AddRecipe';

import { AddRecipe, Container } from 'components';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';

export const HeroSection = () => {
  const currentTheme = useSelector(selectTheme);
  console.log(currentTheme);
  return (
    <Hero currentTheme={currentTheme}>
      <Container>
        <Herowrapper>
          <StyledMainPageTitle>
            Craft Your Perfect Drink with Drink Master
          </StyledMainPageTitle>
          <Herodescription>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the world's
            finest beverages.
          </Herodescription>
          <AddRecipe />
        </Herowrapper>
      </Container>
      {/* <Herobackground></Herobackground> */}
    </Hero>
  );
};
