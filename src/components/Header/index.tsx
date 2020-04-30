import React from 'react';

import raibowIcon from '../../assets/rainbowIcon.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={raibowIcon} alt="Rainbow Six" />
      <p>R6 FINDER</p>
    </Container>
  );
};

export default Header;
