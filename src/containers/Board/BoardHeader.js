import EditableText from 'containers/EditableText';
import React from 'react';
import styled from 'styled-components';
import config from 'app/config';
import io from 'socket.io-client';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const HeaderChildDiv = styled.div`
  margin: 0 auto;
`;

class BoardHeader extends React.Component {
  state = {
    title: '',
    description: '',
  };

  socket = io(config.api.URL);

  componentDidMount() {
    this.fetchTitle();
    this.fetchDescription();
    this.initializeSocket();
  }

  handleTitleConfirm = title => {
    this.socket.emit('setBoardTitle', title);
  };

  handleDescriptionConfirm = description => {
    this.socket.emit('setBoardDescription', description);
  };

  initializeSocket() {
    this.socket.on('boardTitleChanged', newTitle => {
      this.setState({ title: newTitle });
    });

    this.socket.on('boardDesciptionChanged', newDescription => {
      this.setState({ description: newDescription });
    });
  }

  fetchTitle() {
    fetch(config.api.URL + '/api/title', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ title: data.title });
      });
  }

  fetchDescription() {
    fetch(config.api.URL + '/api/description', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ description: data.description });
      });
  }

  saveTitle(title) {
    fetch(config.api.URL + '/api/title', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
      }),
    });
  }

  saveDescription(description) {
    fetch(config.api.URL + '/api/description', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: description,
      }),
    });
  }

  render() {
    return (
      <HeaderDiv>
        <HeaderChildDiv>
          {
            <EditableText
              large
              text={this.state.title}
              placeholder="No title"
              onTextConfim={this.handleTitleConfirm}
            />
          }
        </HeaderChildDiv>
        <HeaderChildDiv>
          {this.state.description && (
            <EditableText
              text={this.state.description}
              placeholder="No desciption"
              onTextConfim={this.handleDescriptionConfirm}
            />
          )}
        </HeaderChildDiv>
      </HeaderDiv>
    );
  }
}

export default BoardHeader;
