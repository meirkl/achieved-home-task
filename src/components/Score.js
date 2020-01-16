import React, { useCallback } from 'react';
import styled from 'styled-components';
import { RESET, useStore } from '../store';
import breaks from '../styles/breaks';
import { failure, inconclusive, success } from '../styles/colors';
import Button from './Button';

const Wrapper = styled.div`
  text-align: center;
  button {
    margin-top: 50px;
  }
`;
const StyledScore = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => {
    if (props.score < 40) return `${failure}`;
    else if (props.score >= 40 && props.score < 70) return `${inconclusive}`;
    return `${success}`;
  }};
  border-radius: 10px;
  div {
    text-align: center;
    @media ${breaks.break1} {
      h3 {
        font-size: 1.9rem;
      }
      h4 {
        font-size: 1.4rem;
      }
    }
    @media ${breaks.break2} {
      h3 {
        font-size: 2.5rem;
      }
      h4 {
        font-size: 2rem;
      }
    }
    @media ${breaks.break3} {
      h3 {
        font-size: 3rem;
      }
      h4 {
        font-size: 2.5rem;
      }
    }
  }
`;

const Score = () => {
  const [{ score }, dispatch] = useStore();
  const getScoreText = useCallback(() => {
    if (score < 40)
      return (
        <>
          <h3>
            Shame...{' '}
            <span role="img" aria-label="Crying Face">
              😢
            </span>
          </h3>
          <h4>See you again?</h4>
        </>
      );
    else if (score >= 40 && score < 70)
      return (
        <>
          <h3>
            You can do better...{' '}
            <span role="img" aria-label="Smirking Face">
              😏
            </span>
          </h3>
          <h4>See you again?</h4>
        </>
      );
    return (
      <>
        <h3>
          Congratulations!{' '}
          <span role="img" aria-label="Smiling Face With Sunglasses">
            😎
          </span>
        </h3>
        <h4>Well played...</h4>
      </>
    );
  }, [score]);
  return (
    <Wrapper>
      <StyledScore score={score}>
        <div>
          {getScoreText()}
          <h3>Your score is: {score}</h3>
        </div>
      </StyledScore>
      <Button text="restart" color={success} onClick={() => dispatch({ type: RESET })}></Button>
    </Wrapper>
  );
};

export default Score;
