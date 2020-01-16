import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { lightBlue, white } from '../styles/colors';

const StyledButton = styled.button`
  color: ${white};
  background-color: ${props => (props.color ? `${props.color}` : `${lightBlue}`)};
  border: none;
  border-radius: 25px;
  padding: 15px 30px;
  margin: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: capitalize;
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = ({ text, ...props }) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default Button;
