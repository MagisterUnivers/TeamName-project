import styled from 'styled-components';
// import { CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    // <StyledSpinnerWrapper>
    //   <StyledSpinner size={200} thickness={5} value={25} />
    // </StyledSpinnerWrapper>
    <StyledSpinnerWrapper>
      <StyledSpinner />
    </StyledSpinnerWrapper>
  );
};

export default Spinner;

export const StyledSpinner = styled.span`
  position: relative;
  width: 120px;
  height: 90px;
  margin: 0 auto;

  &:before {
    content: '';
    position: absolute;
    bottom: 30px;
    left: 50px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #ff3d00;
    animation: loading-bounce 0.5s ease-in-out infinite alternate;
  }
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 7px;
    width: 45px;
    border-radius: 4px;
    box-shadow: 0 5px 0 #fff, -35px 50px 0 #fff, -70px 95px 0 #fff;
    animation: loading-step 1s ease-in-out infinite;
  }

  @keyframes loading-bounce {
    0% {
      transform: scale(1, 0.7);
    }
    40% {
      transform: scale(0.8, 1.2);
    }
    60% {
      transform: scale(1, 1);
    }
    100% {
      bottom: 140px;
    }
  }
  @keyframes loading-step {
    0% {
      box-shadow: 0 10px 0 rgba(0, 0, 0, 0), 0 10px 0 #fff, -35px 50px 0 #fff,
        -70px 90px 0 #fff;
    }
    100% {
      box-shadow: 0 10px 0 #fff, -35px 50px 0 #fff, -70px 90px 0 #fff,
        -70px 90px 0 rgba(0, 0, 0, 0);
    }
  }
`;

export const StyledSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// export const StyledSpinner = styled(CircularProgress)`
//   @keyframes changeColor {
//     12.5% {
//       color: #ff0000;
//     }
//     25% {
//       color: #ffa500;
//     }
//     37.5% {
//       color: #ffff00;
//     }
//     50% {
//       color: #7fff00;
//     }
//     62.5% {
//       color: #00ffff;
//     }
//     75% {
//       color: #0000ff;
//     }
//     87.5% {
//       color: #9932cc;
//     }
//     100% {
//       color: #ff1493;
//     }
//   }
//   animation: MuiCircularProgress-keyframes-circular-rotate 1.4s linear infinite,
//     changeColor 3s linear infinite;
// `;
