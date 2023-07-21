import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import { setPage } from 'redux/Cocktails/cocktailsSlice';
import { useMediaRules } from '../../hooks/useMediaRules';
import { selectPage, selectTheme, selectTotalHits } from 'redux/selectors';

const Paginator = () => {
  let page = useSelector(selectPage);
  const dispatch = useDispatch();
  const { isMobile, isTablet, isDesktop } = useMediaRules();
  const totalHits = useSelector(selectTotalHits);
  const limit = isDesktop ? 9 : 8;
  const pageQuantity = Math.ceil(totalHits / limit);
  const theme = useSelector(selectTheme);

  return (
    <>
      {pageQuantity > 1 && (
        <Pagination
          count={pageQuantity}
          page={page}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          onChange={(_, num) => dispatch(setPage(num))}
          sx={{
            marginTop: isMobile ? '40px' : isTablet ? '80px' : '118px',
            marginBottom: isMobile? "80px" : "140px",
            marginX: 'auto',
            maxWidth: isMobile ? '295px' : '436px',
            '& .MuiPaginationItem-root': {
              fontSize: '12px',
              fontWeight: '500',
              color: theme === 'dark' ? 'var(--main-text-color)' : "'#0A0A11'",
              transition: 'background 0.3s ease',
              '&:hover': {
                background: 'rgba(64, 112, 205, 0.4)',
              },
            },
          }}
        />
      )}
    </>
  );
};

export default Paginator;
