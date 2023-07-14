import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

export const StyledSelectWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  &#category{
    z-index: 999;
  }
`;

export const StyledSelect = styled.div`
  display: inline-block;
  position: relative;
  display: flex;
  gap: 8px;
  justify-content: end;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10.5px;
`;

export const StyledCurrentValue = styled.span`
  color: #f3f3f3;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(14 / 14);
`;

export const StyledSlArrowDown = styled(IoIosArrowDown)`
  cursor: pointer;
  pointer-events: none;
  transition: transform 0.5s;
  &.clicked {
    transform: rotate(180deg);
  }
`;

export const StyledSelectBody = styled.div`
  /* display: none; */
  position: absolute;
  padding: 7px 10px 7px 10px;
  border-radius: 12px;
  background: #161f37;
  overflow-y: auto;
  height: 160px;
  right: 0;
  transition: transform 1s;

  @media screen and (min-width: 768px) {
    padding: 10px 14px 10px 14px;
  }
`;

export const StyledOption = styled.div`
  color: rgba(243, 243, 243, 0.4);
  font-size: 12px;
  line-height: calc(16 / 12);
  overflow: hidden;
  cursor: pointer;
  padding: 3px 0 3px 0;

  @media screen and (min-width: 768px) {
    padding: 4px 0 4px 0;
  }
  &:hover,
  &:focus {
    color: #f3f3f3;
  }

  &.clicked {
    color: #f3f3f3;
  }
`;
