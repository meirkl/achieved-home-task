import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import useInterval from '../hooks/useInterval';
import { ReactComponent as Clock } from '../media/clock.svg';
import { DONE, useStore } from '../store';
import { darkBorder } from '../styles/colors';

const StyledTimer = styled.div`
  position: relative;
  margin: 20px 0px;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(50%, -50%);
    font-weight: bold;
  }
  svg {
    width: 20px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
  progress {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background-size: auto;
    height: 40px;
    width: 100%;
    ::-webkit-progress-bar {
      border: ${darkBorder} solid 1.5px;
      border-radius: 18px;
      background: transparent;
      padding: 2px;
    }
    ::-webkit-progress-value {
      border-radius: 18px;
      background: #f03baf;
      background-image: linear-gradient(to right, #fc4f6f, #fc3f8d, #f03baf, #d646d3, #a85af5);
    }
  }
`;

const Timer = ({ minutes }) => {
  const maxTime = minutes * 60;
  const [{ done }, dispatch] = useStore();
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(!done);

  const timer = () => {
    if (time < maxTime) {
      setTime(currTime => currTime + 1);
    } else {
      setIsRunning(false);
      dispatch({ type: DONE });
    }
  };
  useInterval(timer, isRunning ? 1000 : null);

  return (
    <StyledTimer time={time}>
      <Clock />
      <span>{time}</span>
      <progress value={(maxTime - time) / minutes} max={maxTime / minutes}></progress>
    </StyledTimer>
  );
};

Timer.propTypes = {
  maxTime: PropTypes.number.isRequired
};

export default Timer;
