import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'containers/Header';
import Board from 'containers/Board';
import './styles.css';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faCheck);

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  font-family: monospace;
`;

const ContentWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <ContentWrapper>
          <Board />
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
