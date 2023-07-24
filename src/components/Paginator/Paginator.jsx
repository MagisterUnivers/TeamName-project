import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@mui/material';
import { setPage } from 'redux/Cocktails/cocktailsSlice';
import { useMediaRules } from '../../hooks/useMediaRules';
import { selectPage, selectTheme, selectTotalHits } from 'redux/selectors';
import { Link, useLocation} from 'react-router-dom';

const Paginator = () => {
  let page = useSelector(selectPage);
  const dispatch = useDispatch();
  const { isMobile, isTablet, isDesktop } = useMediaRules();
  const totalHits = useSelector(selectTotalHits);
  const limit = isDesktop ? 9 : 8;
  const pageQuantity = Math.ceil(totalHits / limit);
  const theme = useSelector(selectTheme);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {!!pageQuantity  && (
        <Pagination
          count={pageQuantity}
          page={page}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          onChange={(_, num) => dispatch(setPage(num))}
          renderItem={
            (item) => (
               <PaginationItem
               component={Link}
               to={`${currentPath}?page=${item.page}`}
               {...item}/>
            )
          }
          sx={{
            marginTop: isMobile ? '40px' : isTablet ? '80px' : '118px',
            marginBottom: isMobile? "80px" : "140px",
            marginX: 'auto',
            maxWidth: isMobile ? '295px' : '436px',
            maxHeight: '55px',
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
