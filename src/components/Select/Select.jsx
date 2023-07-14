import React, { useState } from 'react';
import {
  StyledSelect,
  StyledSelectBody,
  StyledSlArrowDown,
  StyledSelectWrapper,
  StyledCurrentValue,
  StyledOption,
} from './Select.styled';

const Select = ({ array, name }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(false);

  const dropdownOpen = () => {
    setIsActive(!isActive);
    const selectIcon = document.querySelector('.select__icon');
    selectIcon.classList.toggle('clicked');
  };

  const handleClick = e => {
    setIsActive(!isActive);
    const selectIcon = document.querySelector('.select__icon');
    selectIcon.classList.remove('clicked');
    const selectCurrent = document.querySelector('.select__current');
    selectCurrent.textContent = e.target.innerHTML;
  };

  return (
    <StyledSelectWrapper className="select" id={name}>
      <StyledSelect className="select__header" onClick={dropdownOpen}>
        <StyledCurrentValue className="select__current">
          {array[0]}
        </StyledCurrentValue>
        <StyledSlArrowDown
          className="select__icon"
          color="#f3f3f3"
          size="20px"
        />
      </StyledSelect>
      {isActive && (
        <StyledSelectBody className="select__body">
          {array.map(item => {
            return (
              <StyledOption
                className="select__item"
                data-value={item}
                key={item}
                onClick={handleClick}
              >
                {item}
              </StyledOption>
            );
          })}
        </StyledSelectBody>
      )}
    </StyledSelectWrapper>
  );
};

export default Select;
