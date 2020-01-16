import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Quiz from './components/Quiz';
import Store from './store';
import { backGround, white } from './styles/colors';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
* {
  font-family: 'Open Sans', sans-serif;
}
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  background-color: ${backGround};
  color: ${white}; 
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Store>
        <Quiz />
      </Store>
    </>
  );
};

export default App;
