import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';
import { useNavigate } from 'react-router';
import { Container, ReusableButton } from 'components';
import { StyledMainPageTitle } from 'components/MainPageTitle/MainPageTitle.styled';
import { Hero, Herodescription, Herowrapper } from './Hero.styled';

export const HeroSection = () => {
  const currentTheme = useSelector(selectTheme);
  const navigate = useNavigate();
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
          <ReusableButton
            text="Add Recipe"
            ariaLabel="Button to open Add Recipe Page"
            onClick={() => {
              navigate('/main/add');
            }}
          />
        </Herowrapper>
      </Container>
      {/* <Herobackground></Herobackground> */}
    </Hero>
  );
};
