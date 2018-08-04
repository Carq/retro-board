import EditableText from 'containers/EditableText';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColumnHeaderDiv = styled.div`
  background: #0f0f0f;
  color: #f0f0f0;
  border-radius: 5px;
  padding: 10px 15px;
  font-weight: bold;
`;

class ColumnHeader extends React.Component {
  state = {
    title: this.props.title,
  };

  handleTitleConfirm = title => {
    this.setState({
      title: title,
    });
  };

  render() {
    return (
      <ColumnHeaderDiv>
        <EditableText
          smallIcon
          text={this.state.title}
          placeholder="No name"
          onTextConfirm={this.handleTitleConfirm}
        />
      </ColumnHeaderDiv>
    );
  }
}

ColumnHeader.propTypes = {
  title: PropTypes.string,
};

export default ColumnHeader;
