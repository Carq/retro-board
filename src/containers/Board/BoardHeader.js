import EditableText from 'containers/EditableText';
import React from 'react';
import styled from 'styled-components';
import config from 'app/config';
import { stat } from 'fs';

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

  componentDidMount() {
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

  handleTitleConfirm = title => {
    this.saveTitle(title);
  };

  handleDescriptionConfirm = description => {
    this.saveDescription(description);
  };

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
          {this.state.title && (
            <EditableText
              large
              text={this.state.title}
              placeholder="No title"
              onTextConfim={this.handleTitleConfirm}
            />
          )}
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
