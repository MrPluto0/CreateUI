module.exports = {
  presets: [["@babel/preset-env", { modules: false }]], // enable webpack4 tree-shaking
  env: {
    test: {
      presets: [["@babel/preset-env", { targets: { node: "current" } }]],
    },
  },
};
