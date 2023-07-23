import { Container, SigninForm } from 'components';
import { BaseDiv, SummaryWrapper } from '../WelcomePage/WelcomPage.styled';

const LoginPage = () => {
  return (
    <BaseDiv>
      <Container>
        <SummaryWrapper>
          <SigninForm />
        </SummaryWrapper>
      </Container>
    </BaseDiv>
  );
};

export default LoginPage;
