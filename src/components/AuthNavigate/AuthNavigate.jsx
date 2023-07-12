import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthNavigate = ({ isLoginForm }) => {
  return (
    <div>
      {isLoginForm ? (
        <StyledLink to="/register">Register</StyledLink>
      ) : (
        <StyledLinkAlt to="/signin">Sign in</StyledLinkAlt>
      )}
    </div>
  );
};

export default AuthNavigate;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(14 / 12);

  text-align: center;
  text-decoration-line: underline;

  color: #3e85f3;

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);

    bottom: 15%;
  }
  @media screen and (min-width: 1440px) {
    bottom: 18%;
  }
  @media screen and (max-height: 870px) {
    bottom: 12%;
  }
`;

const StyledLinkAlt = styled(Link)`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(14 / 12);

  text-align: center;
  text-decoration-line: underline;

  color: #3e85f3;

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
    bottom: 15%;
  }
  @media screen and (max-height: 870px) {
    bottom: 8%;
  }
`;
