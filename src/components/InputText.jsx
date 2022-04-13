import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  padding: 10px 2px;
  &:focus {
    outline: none;
  }
`;

export default function InputText({
  placeholder = 'Enter text',
  type = 'text'
}) {
  return <Input placeholder={placeholder} type={type} />;
}
