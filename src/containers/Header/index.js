import H1 from 'components/H1';
import React from 'react';
import ImgHeader from './ImgHeader';
import logoIcon from 'icons/retro_clock.png';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  align-items: center;
  height: 50px;
  background: #e4e4e4;
  display: flex;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <ImgHeader src={logoIcon} alt="logo" />
        <H1>Retro Board</H1>
      </HeaderWrapper>
    );
  }
}

export default Header;
