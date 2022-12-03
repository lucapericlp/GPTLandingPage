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
          <h1>Intraviewer</h1>
          <Subtitle>
            Recruit the best talent while remaining focused on your work.
          </Subtitle>
        </Title>
      </Hero>
      <Content>
        <ul>
          <li>Interviewing is time-consuming.</li>
          <li>It can be draining.</li>
          <li>It removes your focus on shipping new things for clients.</li>
          <li>It can be difficult to find the right candidates.</li>
          <li>It's challenging to make objective hiring decisions.</li>
        </ul>
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

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: white;
`;

const Content = styled.main`
  padding: 20px;
  color: black;
  background: white;
  height: 100%;
`;

export default LandingPage;
