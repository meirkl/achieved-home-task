import React from 'react';
import styled from 'styled-components';
import { ANSWER, useStore } from '../store';
import breaks from '../styles/breaks';
import Navigation from './Navigation';
import Question from './Question';
import QuizBox from './QuizBox';
import Score from './Score';
import Timer from './Timer';

const Wrapper = styled.div`
  padding-top: 50px;
  @media ${breaks.break1} {
    margin: 20px 8vw;
    padding-top: 10px;
  }
  @media ${breaks.break2} {
    margin: 20px 12vw;
  }
  @media ${breaks.break3} {
    margin: 20px 20vw;
  }
`;

const QuestionIndex = styled.p`
  opacity: 0.7;
  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Quiz = () => {
  const [{ questions, currentQuestion, done }, dispatch] = useStore();
  const selectAnswer = answerNumber => {
    dispatch({ type: ANSWER, payload: answerNumber });
  };
  return (
    <Wrapper>
      {!done ? (
        <>
          <Timer minutes={2} />
          <QuestionIndex>
            <span>{`Question ${currentQuestion + 1}`}</span>
            {`/ ${questions.length}`}
          </QuestionIndex>
          <Question title={questions[currentQuestion].question} />
          <QuizBox selectAnswer={selectAnswer} />
          <Navigation />
        </>
      ) : (
        <Score />
      )}
    </Wrapper>
  );
};

export default Quiz;
