import styled from 'styled-components';
import { devices } from 'constants/breakpoints';


export const WrapperGeneralStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto 80px auto;

  max-width: 295px;
  flex-wrap: nowrap;
  align-items: center;
    @media ${devices.tablet} {
    margin-top: 80px;
    margin-bottom: 140px;
  }
  @media ${devices.desktop} {
    margin-top: 118px;
    max-width: 436px;
  }
`
  //  & .MuiPaginationItem-root{
  //   max-width: 295px;

  //   @media ${devices.tablet}{
  //     max-width: 436px;
  //   }
  // }
  //   //arrows
  //   & .MuiPaginationItem-icon {
  //   fill: ${props => props.theme.secondBorderColor};
  //   &:hover,
  //   &:focus {
  //     fill: rgba(64, 112, 205, 0.5);
  //   }
  // }
  // // dots
  // & .MuiPaginationItem-ellipsis {
  //   color: ${props => props.theme.textColor};
  // }
  // & .MuiPagination-ul {
  //   display: flex;
  //   flex-wrap: nowrap;
  //   gap: 24px;
  //   margin-left: auto;
  //   margin-right: auto;
  //   font-size: 12px;
  //   font-style: normal;
  //   font-weight: 500;
  //   line-height: normal;
  //   text-align: center;
  
  //     }
  // //numbers
  // & .MuiPaginationItem-page {
  //   color: ${props => props.theme.textColor};
  //    background-color: transparent;;
  //   transition: background-color 500ms ease;
  //   &:hover,
  //   &:focus {
  //   background-color: rgba(64, 112, 205, 0.5);
  //  }
  // }
  // & .MuiPaginationItem-page.Mui-selected {
  //   width: 27px;
  //   height: 27px;
  //     background-color: grey;
  //   transition: background-color 500ms ease;
  //   &:hover,
  //   &:active {
  //     background-color: rgba(64, 112, 205, 0.5);
  //   }

  // }

