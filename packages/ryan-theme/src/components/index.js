// File: /packages/my-first-theme/src/components/index.js

import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <h1>Hello Frontity</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/jojis-things">About Us</Link>
      </nav>
      <main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>
      </main>
    </>
  );
};

export default connect(Root);
