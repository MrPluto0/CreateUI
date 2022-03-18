import CreateUI from "@gypsophlia/create-ui";

export default ({ Vue, isServer }) => {
  if (!isServer) {
    import("@gypsophlia/create-ui/lib/theme/index.css").then((CreateUI) => {
      Vue.use(CreateUI); // global register
    });
  }
};
