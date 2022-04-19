import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const FormInput = styled.div`
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.span`
  color: red;
  margin-top: 2px;
  font-size: 12px;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
