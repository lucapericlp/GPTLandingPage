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
        <List>
          <ListItem>
            <ListTitle>Interviewing is time-consuming.</ListTitle>
            <Paragraph>
              Lorem ipsum dolor sit amet.
            </Paragraph>
          </ListItem>
          <ListItem>
            <ListTitle>It can be draining.</ListTitle>
            <Paragraph>
              Lorem ipsum dolor sit amet.
            </Paragraph>
          </ListItem>
          <ListItem>
            <ListTitle>
              It removes your focus on shipping.
            </ListTitle>
            <Paragraph>
              Lorem ipsum dolor sit amet.
            </Paragraph>
          </ListItem>
          <ListItem>
            <ListTitle>It can be difficult to find talent.</ListTitle>
            <Paragraph>
              Lorem ipsum dolor sit amet.
            </Paragraph>
          </ListItem>
          <ListItem>
            <ListTitle>It's challenging to make decisions.</ListTitle>
            <Paragraph>
              Lorem ipsum dolor sit amet.
            </Paragraph>
          </ListItem>
        </List>
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

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;

const ListTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 300;
`;

export default LandingPage;
