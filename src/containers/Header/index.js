import React from 'react';
import H1Header from './H1Header';
import ImgHeader from './ImgHeader';
import logoIcon from 'images/logo.png';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  align-items: center;
  height: 70px;
  color: #dfefff;
  background: #102000;
  display: flex;
`;

class Header extends React.Component {
  render() {

    return (
      <HeaderWrapper>
        <ImgHeader src={logoIcon} alt="logo" />
          <H1Header>Retro Board</H1Header>
      </HeaderWrapper>
    );
  }
}

export default Header;
