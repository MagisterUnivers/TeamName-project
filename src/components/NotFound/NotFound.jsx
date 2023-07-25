import { Wrapper, Image, Message } from './NotFound.styled';
import cocktailTabDesc1 from './images/cocktailTabDesc1.png';
import cocktailTabDesc2 from './images/cocktailTabDesc2.png';
import cocktailMobile1 from './images/cocktailMobile1.png';
import cocktailMobile2 from './images/cocktailMobile2.png';
import cocktailTabDesc1Light from '../../assets/img/hero-section/Mask-group.png';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';

export const NotFound = ({ message }) => {
  const theme = useSelector(selectTheme);
  return (
    <Wrapper>
      <Image>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={
              theme === 'dark'
                ? `${cocktailTabDesc1}, ${cocktailTabDesc2} 2x`
                : `${cocktailTabDesc1Light}, ${cocktailTabDesc1Light} 2x`
            }
          />
          <source
            media="(min-width: 768px)"
            srcSet={
              theme === 'dark'
                ? `${cocktailTabDesc1}, ${cocktailTabDesc2} 2x`
                : `${cocktailTabDesc1Light}, ${cocktailTabDesc1Light} 2x`
            }
          />
          <img
            src={cocktailMobile1}
            srcSet={
              theme === 'dark'
                ? `${cocktailMobile1}, ${cocktailMobile2} 2x`
                : `${cocktailTabDesc1Light}, ${cocktailTabDesc1Light} 2x`
            }
            alt="Not Found"
          />
        </picture>
      </Image>
      <Message>{message}</Message>
    </Wrapper>
  );
};
