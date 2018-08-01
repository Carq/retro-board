import React from 'react';
import TitleBar from 'components/TitleBar';

class Board extends React.Component {
  state = { retroTitle: 'Test Board name' };

  render() {
    return (
      <div>
        <TitleBar title={this.state.retroTitle} />
      </div>
    );
  }
}

export default Board;
