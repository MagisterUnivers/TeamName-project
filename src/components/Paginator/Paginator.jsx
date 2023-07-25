import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { setPage } from 'redux/Cocktails/cocktailsSlice';
import { useMediaRules } from '../../hooks/useMediaRules';
import { selectPage, selectTheme, selectTotalHits } from 'redux/selectors';
// import { WrapperGeneralStyled } from './Paginator.styled';

export const Paginator = () => {
  let page = useSelector(selectPage);
  const dispatch = useDispatch();
  const { isMobile, isDesktop } = useMediaRules();
  const totalHits = useSelector(selectTotalHits);
  const limit = isDesktop ? 9 : 8;
  const pageQuantity = Math.floor(totalHits / limit);
  const theme = useSelector(selectTheme);

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        marginTop: isMobile ? '40px' : '80px',
      }}
    >
      {pageQuantity > 1 && (
        <Pagination
          count={pageQuantity}
          page={page}
          onChange={(_, num) => dispatch(setPage(num))}
          defaultPage={page}
          boundaryCount={1}
          siblingCount={1}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          sx={{
            marginX: 'auto',
            '& .MuiPaginationItem-root': {
              fontSize: '12px',
              fontWeight: '500',
              color: theme === 'dark' ? 'var(--main-text-color)' : "'#0A0A11'",
              transition: 'background 0.3s ease',
              '&:hover': {
                background: 'rgba(64, 112, 205, 0.4)',
              },
            },
            // '& .MuiPaginationItem-page': {
            //   color: theme === 'dark' ? 'var(--main-text-color)' : "'#0A0A11'",
            //   background: 'transparent',
            //   transition: 'background-color 500ms ease',
            //   '&:hover, &:focus ': {
            //     background: 'rgba(64, 112, 205, 0.5)',
            //   },
            // },
            '& .MuiPaginationItem-page.Mui-selected': {
              background: 'rgba(64, 112, 205, 0.4)',
            },
            'Ul.MuiPagination-ul': {
              flexWrap: 'nowrap',
            },
          }}
        />
      )}
    </Box>
  );
};

export default Paginator;
