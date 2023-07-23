import { useSelector } from 'react-redux';
import { WrapDiv, P404, ImgNotFound, PageWrap } from './NotFounPage.styled';
import { useMediaQuery } from 'react-responsive';
import { selectTheme } from 'redux/selectors';
import { Container } from 'components';

const notFoundImg1x = require('../../assets/img/NotFound1x.jpg');
const notFoundImg2x = require('../../assets/img/NotFound2x.jpg');
const notFoundWhite1x = require('../../assets/img/notFoundWhite1x.png');
const notFoundWhite2x = require('../../assets/img/notFoundWhite2x.png');

const NotFoundPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  const theme = useSelector(selectTheme);
  return (
    <PageWrap>
      <Container>
        <WrapDiv>
          {theme === 'dark' ? (
            isMobile ? (
              <ImgNotFound src={notFoundImg2x} alt="" />
            ) : (
              <ImgNotFound src={notFoundImg1x} alt="" />
            )
          ) : isMobile ? (
            <ImgNotFound src={notFoundWhite1x} alt="" />
          ) : (
            <ImgNotFound src={notFoundWhite2x} alt="" />
          )}

          <P404 theme={theme}>4 4</P404>
        </WrapDiv>
      </Container>
    </PageWrap>
  );
};

export default NotFoundPage;
