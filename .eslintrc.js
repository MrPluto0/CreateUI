module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:prettier/essential",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["vue"],
  rules: {},
};
