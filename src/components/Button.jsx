import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 3px;
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: 17px;
  letter-spacing: 1px;
  padding: 10px 25px;

  &:hover {
    background-color: ${(props) => props.backgroundColorHover};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default function Button({
  backgroundColor = '#fff',
  backgroundColorHover,
  color = 'black',
  disabled,
  text = 'Button',
  type
}) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      color={color}
      disabled={disabled}
      type={type}
    >
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundColorHover: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired
};
