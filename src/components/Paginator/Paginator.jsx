import { useDispatch, useSelector } from 'react-redux';
import  { Pagination } from '@mui/material';

import { selectPage, selectTheme, selectTotalHits } from 'redux/selectors';

import { setPage } from 'redux/Cocktails/cocktailsSlice';
import { WrapperGeneralStyled } from './Paginator.styled';
import { useMediaRules } from 'hooks/useMediaRules';
import { useEffect, useState } from 'react';
// import { useState } from 'react';

const Paginator = () => {
  // let page = useSelector(selectPage);
  const [pageLocal, setPageLocal] = useState(1);
  const dispatch = useDispatch();
  const { isMobile } = useMediaRules();
  const totalHits = useSelector(selectTotalHits);
  const limit = 9; //!!!!
  const pageQuantity = Math.ceil(totalHits / limit);
  const theme = useSelector(selectTheme);
  
  useEffect(()=> {
    dispatch(setPage(pageLocal))
  }, [pageLocal])

  return (
    <WrapperGeneralStyled>
      {pageQuantity > 1 && (
        <Pagination
          count={pageQuantity}
          page={pageLocal}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          onChange={(_, num) => setPageLocal(num)}
          sx={{
            marginTop: 3,
            marginX: 'auto',
            maxWidth: isMobile ? '295px' : '436px',
            '& .MuiPaginationItem-root': {
              fontSize: '12px',
              fontWeight: '500',
              color: (theme === "dark") ? "var(--main-text-color)" : "'#0A0A11'",
              transition: 'background 0.3s ease',
              '&:hover': {
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
