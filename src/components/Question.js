import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyleQuestion = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Question = props => {
  return <StyleQuestion>{props.title}?</StyleQuestion>;
};

Question.propTypes = {
  title: PropTypes.string.isRequired
};

export default Question;
