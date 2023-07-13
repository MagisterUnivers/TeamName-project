import React from 'react';
import {StyledSelect, StyledOption, StyledOptions} from './Select.styled'

const Select = ({array, name}) => {
  
  return (
    <StyledSelect name={name} id={name}>
      {array.map(item => {
        return (
          <StyledOption value={item} key={item}>
            {item}
          </StyledOption>
        );
      })}
    </StyledSelect>
  );
};

export default Select;
