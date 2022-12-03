import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const LandingPage = () => {
  return (
    <Container>
      <Header>
        <h1>Welcome to My App!</h1>
      </Header>
      <Hero>
        <Title>
          <h1>Welcome to My App!</h1>
        </Title>
      </Hero>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada quam vel nisi dignissim, vel viverra velit lobortis.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Suspendisse potenti.
        </p>
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
  display: none;
`;

const Hero = styled.div`
  height: 50vh;
  width: 100%;
  background: linear-gradient(to bottom, #00b4db, #0083b0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  color: white;
  text-align: center;
  background: none;
`;

const Content = styled.main`
  padding: 20px;
  color: black;
  background: white;
`;

export default LandingPage;
