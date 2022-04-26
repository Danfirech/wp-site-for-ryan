import Root from "./components";

const jojiHandler = {
  pattern: "/nats-things/",
  func: ({ state }) => {
    state.source.data["/nats-things/"].isJoji = true;
  },
};

export default {
  name: "ryan-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers.push(jojiHandler);
      },
    },
  },
};
