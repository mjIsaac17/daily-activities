import styled from 'styled-components';
import Button from '../components/Button';
import InputText from '../components/InputText';

const LoginPage = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(3, 76, 143, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const LoginContainer = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 5px rgba(74, 74, 74, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: min(400px, 90%);
  position: relative;
  width: min(400px, 90%);
`;

const TitleContainer = styled.div`
  color: #626262;
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
  top: 15px;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 900;
`;

const Subtitle = styled.h6`
  font-size: 20px;
  font-weight: 500;
`;

const LoginForm = styled.form`
  width: 90%;
`;
const FormInput = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 5px;
`;

const Register = styled.a`
  color: #626262;
  bottom: 15px;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
`;

export default function Login() {
  return (
    <LoginPage className='container-center'>
      <LoginContainer>
        <TitleContainer>
          <Title>Daily activities app</Title>
          <Subtitle>Welcome back!</Subtitle>
        </TitleContainer>
        <LoginForm>
          <FormInput className='flex-column'>
            <Label>Email</Label>
            <InputText placeholder='example@gmail.com' />
          </FormInput>
          <FormInput className='flex-column'>
            <Label>Password</Label>
            <InputText placeholder='Password' type='password' />
          </FormInput>
        </LoginForm>
        <Button
          text='Login'
          backgroundColor='teal'
          color='white'
          backgroundColorHover='#1c6c6f'
        />
        <Register>Create new account</Register>
      </LoginContainer>
    </LoginPage>
  );
}
