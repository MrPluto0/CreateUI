---
sidebar: auto
---

# Guide

By guidance, you will know about the feature and usage of this lib.

## Feature

- Global loading
- Demand loading
- Locale
- Website

## Install

- npm

```
npm install @gypsophlia/create-ui -S
```

- yarn

```
yarn add @gypsophlia/create-ui -S
```

## Usage

### Global import

```js
import CreateUI from "@gypsophlia/create-ui";
import "@gypsophlia/create-ui/lib/theme/index.css";
Vue.use(CreateUI);
```

### Demand import

```js
import { Chatbox } from "@gypsophlia/create-ui";
Vue.use(Chatbox);
```

## Configure

**Demand import** needs to install one of the following plugins to configure the path.

- `babel-plugin-component`

```
npm install babel-plugin-component -D
```

Babel Config

```json
plugins: [
  [
    "component",
    {
      "libraryName": "@gypsophlia/create-ui",
      "styleLibrary": {
        "name": "theme",
        "base": false
      }
    }
  ]
]
```

- `babel-plugin-import`

```
npm install babel-plugin-import -D
```

Babel Config

```json
plugins: [
  [
    "import",
    {
      "libraryName": "@gypsophlia/create-ui",
      "styleLibraryDirectory": "lib/theme"
    }
  ]
]
```

::: tip
Put the following codes into `configureWebpack` in `webpack.config.js` or `vue.config.js`
:::

Webpack Config，in order to support `.css` suffix.

```js
resolve: {
  extensions: [".css"];
}
```
