import { ReactComponent as iconMinus } from '../../../assets/icons/minus.svg';
import { ReactComponent as iconPlus } from '../../../assets/icons/plus.svg';
import { CounterWrp, StyledButton, getStyledIcon } from './Counter.styled';

const Counter = ({
  handleInc,
  handleDec,
  list
}) => {
  // const [counter, setCounter] = useState(3);

  const StyledIconMinus = getStyledIcon(iconMinus);
  const StyledIconPlus = getStyledIcon(iconPlus);

  // const handleAddCounter = () => {
  //   setCounter(p => p + 1);
  // };

  // const handleMinusCounter = () => {
  //   setCounter(p => p - 1);
  // };

  return (
    <CounterWrp>
      <StyledButton onClick={handleDec}>
        <StyledIconMinus />
      </StyledButton>
      <p>{list.length}</p>
      <StyledButton onClick={handleInc}>
        <StyledIconPlus />
      </StyledButton>
    </CounterWrp>
  );
};

export default Counter;
