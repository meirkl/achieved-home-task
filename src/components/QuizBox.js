import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { useStore } from '../store';
import { lightBlue, lightBorder } from '../styles/colors';

const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  position: relative;
  border: ${lightBorder} solid 1.5px;
  border-radius: 12px;
  margin: 15px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 1.2rem;
`;

const Check = styled.span`
  position: absolute;
  width: 25px;
  height: 25px;
  border: ${lightBorder} solid 1.5px;
  border-radius: 50%;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background-color: ${props => (props.checked ? `${lightBlue}` : 'transparent')};
  ::after {
    content: '${props => (props.checked ? '✔\fe0e' : ' ')}';
    position: relative;
    width: 10px;
    left: 15%;
    top: -15%;
  }
`;

const QuizBox = ({ selectAnswer }) => {
  const [{ questions, currentQuestion, userAnswers }] = useStore();

  return (
    <Wrapper>
      {questions[currentQuestion].answers.map((answer, i) => (
        <Item key={i} onClick={() => selectAnswer(i)}>
          {answer.text}
          <Check checked={i === userAnswers[currentQuestion]} />
        </Item>
      ))}
    </Wrapper>
  );
};

QuizBox.propTypes = {
  selectAnswer: PropTypes.func.isRequired
};

export default QuizBox;
