import { WrapDiv, P404, ImgNotFound, PageWrap } from './NotFounPage.styled';
import { useMediaQuery } from 'react-responsive';

const notFoundImg1x = require('../../assets/img/NotFound1x.jpg');
const notFoundImg2x = require('../../assets/img/NotFound2x.jpg');

const NotFoundPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });

  return (
    <PageWrap>
      <WrapDiv>
        {isMobile ? (
          <ImgNotFound src={notFoundImg2x} alt="" />
        ) : (
          <ImgNotFound src={notFoundImg1x} alt="" />
        )}
        <P404>4 4</P404>
      </WrapDiv>
    </PageWrap>
  );
};

export default NotFoundPage;
