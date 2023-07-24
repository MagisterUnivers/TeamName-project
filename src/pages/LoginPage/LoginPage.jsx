import { SigninForm } from 'components';
import { BaseDiv, SummaryWrapper } from '../WelcomePage/WelcomPage.styled';

const LoginPage = () => {
  return (
    <BaseDiv>
      <SummaryWrapper>
        <SigninForm />
      </SummaryWrapper>
    </BaseDiv>
  );
};

export default LoginPage;
