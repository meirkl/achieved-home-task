import React, { createContext, useContext, useReducer } from 'react';
import questions from './questions.json';

export const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

export const NEXT = 'NEXT';
export const PREV = 'PREV';
export const DONE = 'DONE';
export const RESET = 'RESET';
export const ANSWER = 'ANSWER';

const initialState = {
  currentQuestion: 0,
  questions,
  userAnswers: Array(questions.length).fill(-1),
  score: 0,
  done: false
};

function calculateScore(state) {
  const { userAnswers, questions } = state;
  let score = 0;
  userAnswers.forEach((answer, i) => {
    if (answer > -1 && questions[i].answers[answer].correct) {
      score++;
    }
  });
  return Math.floor((score / userAnswers.length) * 100);
}

const reducer = (state, action) => {
  switch (action.type) {
    case NEXT:
      return state.currentQuestion < questions.length - 1
        ? {
            ...state,
            currentQuestion: state.currentQuestion + 1
          }
        : state;
    case PREV:
      return state.currentQuestion > 0
        ? {
            ...state,
            currentQuestion: state.currentQuestion - 1
          }
        : state;
    case ANSWER:
      state.userAnswers[state.currentQuestion] = action.payload;
      return {
        ...state,
        userAnswers: state.userAnswers
      };
    case DONE:
      let score = calculateScore(state);
      return {
        ...state,
        score,
        done: true
      };
    case RESET:
      return {
        currentQuestion: 0,
        questions,
        userAnswers: Array(questions.length).fill(-1),
        score: 0,
        done: false
      };
    default:
      return state;
  }
};

export default ({ children }) => (
  <StoreContext.Provider value={useReducer(reducer, initialState)} children={children} />
);
