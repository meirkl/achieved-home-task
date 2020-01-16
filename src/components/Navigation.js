import React from 'react';
import styled from 'styled-components';
import { DONE, NEXT, PREV, useStore } from '../store';
import Button from './Button';

const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navigation = () => {
  const [state, dispatch] = useStore();
  return (
    <StyledNavigation>
      <Button
        text="prev"
        navBtn
        disabled={state.currentQuestion === 0}
        onClick={() => dispatch({ type: PREV })}
      />
      {state.currentQuestion === state.questions.length - 1 ? (
        <Button text="done" onClick={() => dispatch({ type: DONE })} />
      ) : (
        <Button text="next" onClick={() => dispatch({ type: NEXT })} />
      )}
    </StyledNavigation>
  );
};

export default Navigation;
