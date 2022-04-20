import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  padding: 10px 2px;
  &:focus {
    outline: none;
  }
`;

export default function InputText({
  name,
  placeholder = 'Enter text',
  onChange,
  type,
  value
}) {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}

const StyledTextarea = styled.textarea`
  border: none;
  border-bottom: 1px solid gray;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  height: 45vh;
  padding: 10px 2px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export function TextArea({
  name,
  onChange,
  placeholder = 'Enter text',
  value
}) {
  return (
    <StyledTextarea
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}

InputText.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf([
    'text',
    'file',
    'number',
    'date',
    'file',
    'password',
    'email'
  ]).isRequired
};
