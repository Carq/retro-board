import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'containers/Header';
import Board from 'containers/Board';
import './styles.css';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faCheck,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faCheck, faPlusCircle);

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: monospace;
  min-height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 100%;
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
