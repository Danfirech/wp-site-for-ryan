// File: /packages/my-first-theme/src/components/index.js

import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Container = styled.div`
  height: 1500px;
  width: 100vw;
  background-color: pink;
`;

const Header = styled.header`
  height: 200px;
  width: 100%;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global
        styles={css`
          html {
          }
        `}
      />
      <Header>
        {/* <h1>Hello Frontity</h1>
        <p>Current URL: {state.router.link}</p> */}
        <nav>
          <Link link="/">Home</Link>
          <br />
          <Link link="/jojis-things">About Us</Link>
        </nav>
      </Header>
      <Container>
        <main>
          <Switch>
            <List when={data.isArchive} />
            <Post when={data.isPost} />
            <Page when={data.isPage} />
          </Switch>
        </main>
        <Body>{data.isAgencies && <Agencies />}</Body>
      </Container>
    </>
  );
};

export default connect(Root);
