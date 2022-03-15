module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "create-ui-lib",
        libraryDirectory: "lib",
        styleLibraryDirectory: "lib/theme",
        // style: (name) => `${name}/style`,
      },
    ],
  ],
};
