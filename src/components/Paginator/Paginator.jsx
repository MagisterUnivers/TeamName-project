import { useDispatch, useSelector } from 'react-redux';
import { Pagination} from '@mui/material';
import { setPage } from 'redux/Cocktails/cocktailsSlice';
import { useMediaRules } from '../../hooks/useMediaRules';
import { selectPage, selectTheme, selectTotalHits } from 'redux/selectors';
import { WrapperGeneralStyled } from './Paginator.styled';

export const Paginator = () => {
  let page = useSelector(selectPage);
  const dispatch = useDispatch();
  const { isMobile, isTablet, isDesktop } = useMediaRules();
  const totalHits = useSelector(selectTotalHits);
  const limit = isDesktop ? 9 : 8;
  const pageQuantity = Math.floor(totalHits / limit);
  const theme = useSelector(selectTheme);

  return (
    <WrapperGeneralStyled>
      {pageQuantity > 1  && (
        <Pagination
          count={pageQuantity}
          page={page}
          onChange={(_, num) => dispatch(setPage(num))}
          onClick={() => {
           window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          sx={{
            marginX: 'auto',
            maxWidth: isMobile ? '295px' : '436px',
            maxHeight: '55px',
            '& .MuiPaginationItem-root': {
              fontSize: '12px',
              fontWeight: '500',
              color: theme === 'dark' ? 'var(--main-text-color)' : "'#0A0A11'",
              transition: 'background 0.3s ease',
              '&:hover, &:focus': {
                background: 'rgba(64, 112, 205, 0.4)',
              },
            },
          }}
        />
      )}
    </WrapperGeneralStyled>
  );
};

export default Paginator;

