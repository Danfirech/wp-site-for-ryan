import Root from "./components";

const agenciesHandler = {
  name: "agencies",
  priority: 10,
  pattern: "/jojis-things/",
  func: ({ state }) => {
    state.source.data["/jojis-things/"].isAgencies = true;
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
        libraries.source.handlers.push(agenciesHandler);
      },
      beforeSSR: before,
      beforeCSR: before,
    },
  },
};
