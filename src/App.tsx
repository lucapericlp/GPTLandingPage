import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const LandingPage = () => {
  return (
    <Container>
      <Header>
        <h1>Welcome to My App!</h1>
      </Header>
      <Content>
        <p>This is my awesome React app with a gradient background!</p>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #00b4db, #0083b0);
`;

const Header = styled.header`
  padding: 20px;
  text-align: center;
  color: white;
  background: ${lighten(0.1, '#0083b0')};
`;

const Content = styled.main`
  padding: 20px;
  color: white;
  background: ${lighten(0.2, '#0083b0')};
`;

export default LandingPage;
