import "@gypsophlia/create-ui/lib/theme/index.css";

export default ({ Vue, isServer }) => {
  // resolve the SSR problem in Node
  if (!isServer) {
    import("@gypsophlia/create-ui").then((CreateUI) => {
      Vue.use(CreateUI); // global register
    });
  }
};
