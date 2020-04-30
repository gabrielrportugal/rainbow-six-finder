import styled from 'styled-components';

import rainbowSixBackground from '../../assets/rainbow-background.png';

export const Background = styled.div`
  display: flex;
  flex: 1;
  background: #4f4f4f url(${rainbowSixBackground}) no-repeat center;
  background-size: cover;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;
