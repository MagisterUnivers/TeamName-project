import { Pagination } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled(Pagination)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px;

//arrows
  & .MuiPaginationItem-icon {
    fill: rgba(243, 243, 243, 0.30);;
  }

  & .MuiPaginationItem-ellipsis {
    color: green;
  }
//dots
  & .MuiPagination-ul {
    display: flex;
    flex-wrap: nowrap;
    max-width: 100%;

    margin-top: 0;
    gap: 0px;
    color: #F3F3F3;
  }
//numbers
  & .MuiPaginationItem-page {
    padding: 0;
    /* min-width: 27px; */
    color: #F3F3F3;
  }

  & .MuiPaginationItem-page.Mui-selected {
    /* width: 27px;
    height: 27px; */

    background-color: purple;
    color: green;

    /* transition: var (--transition-function); */

    &:hover,
    &:focus {
      color: blue;

      background-color: red;
    }

  }
`;