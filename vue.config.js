const { defineConfig } = require("@vue/cli-service");

const envs = {
  development: require("./config/dev.env"),
  lib: require("./config/lib.env"),
  production: require("./config/prod.env"),
};

module.exports = defineConfig(envs[process.env.NODE_ENV]);
