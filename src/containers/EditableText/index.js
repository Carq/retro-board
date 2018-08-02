import FontIcon from 'components/FontIcon';
import Input from './Input';
import PropTypes from 'prop-types';
import React from 'react';
import TextBar from 'components/TextBar';
import styled from 'styled-components';

const EditableTextDiv = styled.div`
  align-items: center;
  display: flex;
  font-size: ${props => (props.large === true ? '32px' : '22px')};
`;

class EditableText extends React.Component {
  state = {
    text: this.props.text,
    isEditing: false,
  };

  onTextBarClick = () => {
    this.setState({
      isEditing: true,
    });
  };

  onTextConfirm = () => {
    this.setState({
      isEditing: false,
    });
  };

  onTextChange = event => {
    this.setState({
      text: event.target.value,
    });
  };

  renderStaticText() {
    return (
      <EditableTextDiv large={this.props.large}>
        <TextBar
          text={this.state.text}
          placeholder={this.props.placeholder}
          onClick={this.onTextBarClick}
        />
      </EditableTextDiv>
    );
  }

  renderEditableText() {
    return (
      <EditableTextDiv large={this.props.large}>
        <Input
          type="text"
          value={this.state.text}
          onChange={this.onTextChange}
        />
        <FontIcon large icon="check" onClick={this.onTextConfirm} />
      </EditableTextDiv>
    );
  }

  render() {
    return this.state.isEditing
      ? this.renderEditableText()
      : this.renderStaticText();
  }
}

EditableText.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  onTextConfim: PropTypes.func,
  large: PropTypes.bool,
};

export default EditableText;
