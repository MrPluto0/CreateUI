const envs = {
  development: () => require("./config/dev.config"),
  lib: () => require("./config/lib.config"),
  production: () => require("./config/prod.prod"),
};

module.exports = envs[process.env.NODE_ENV];
