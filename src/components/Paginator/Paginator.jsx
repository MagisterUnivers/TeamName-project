import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import { selectPage, selectTotalHits } from 'redux/selectors';
import { setPage } from 'redux/Cocktails/cocktailsSlice';
import { Wrapper, WrapperGeneralStyled } from './Paginator.styled';

export const Paginator = () => {
  let page = useSelector(selectPage);
  const dispatch = useDispatch();
  const totalHits = useSelector(selectTotalHits);
  const limit = 8; //!!!!
  const pageQuantity = Math.ceil(totalHits / limit);
  // console.log(pageQuantity);
  return (
    <WrapperGeneralStyled>
      {pageQuantity > 1 && (
        <Pagination
          count={pageQuantity}
          page={page}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          onChange={(_, num) => dispatch(setPage(num))}
          sx={{ marginY: 3, marginX: 'auto' }}
        />
      )}
    </WrapperGeneralStyled>
  );
};
