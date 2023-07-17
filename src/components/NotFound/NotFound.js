import { Wrapper, Image, Message } from './NotFound.styled';


import cocktailTabDesc1 from './images/cocktailTabDesc1.png';
import cocktailTabDesc2 from './images/cocktailTabDesc2.png';
import cocktailMobile1 from './images/cocktailMobile1.png';
import cocktailMobile2 from './images/cocktailMobile2.png';

const NotFound = ({ message }) => {
  return (
        <Wrapper>
      <Image>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${cocktailTabDesc1}, ${cocktailTabDesc2} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${cocktailTabDesc1}, ${cocktailTabDesc2} 2x`}
          />
          <img
            src={cocktailMobile1}
            srcSet={`${cocktailMobile1}, ${cocktailMobile2} 2x`}
            alt="Not Found"
          />
        </picture>
      </Image>
      <Message>{message}</Message>
        </Wrapper>
     );
};

export default NotFound;