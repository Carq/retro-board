import React from 'react';
import TitleBar from 'components/TitleBar';
import EditableTitleBar from 'components/EditableTitleBar';

class Board extends React.Component {
  state = {
    retroTitle: 'Test Board name',
    isEditingTitle: null,
  };

  handleTitleConfirm = title => {
    this.setState({
      retroTitle: title,
      isEditingTitle: false,
    });
  };

  handleTitleBarOnClick = () => {
    this.setState({
      isEditingTitle: true,
    });
  };

  renderTitleBar() {
    return (
      <TitleBar
        title={this.state.retroTitle}
        onClick={this.handleTitleBarOnClick}
      />
    );
  }

  renderEditableTitleBar() {
    return (
      <EditableTitleBar
        title={this.state.retroTitle}
        onTitleConfim={this.handleTitleConfirm}
      />
    );
  }

  render() {
    let titleBar = this.state.isEditingTitle
      ? this.renderEditableTitleBar()
      : this.renderTitleBar();

    return <div>{titleBar}</div>;
  }
}

export default Board;
