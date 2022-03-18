---
sidebar: auto
---

# 指南

通过指南，你将明白该组件库的特性，及使用方式。

## 功能

- 全局加载
- 按需加载
- 国际化配置
- 样例网站

## 安装

- npm

```
npm install @gypsophlia/create-ui -S
```

- yarn

```
yarn add @gypsophlia/create-ui -S
```

## 用法

### 全局引入

```js
import CreateUI from "@gypsophlia/create-ui";
import "@gypsophlia/create-ui/lib/theme/index.css";
Vue.use(CreateUI);
```

### 按需引入

```js
import { Chatbox } from "@gypsophlia/create-ui";
Vue.use(Chatbox);
```

## 配置

按需引入的项目需要安装如下任意一个插件，进行配置

- `babel-plugin-component`

```
npm install babel-plugin-component -D
```

Babel 配置

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

Babel 配置

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
以下配置写入`webpack.config.js`或`vue.config.js`中的 `configureWebpack`中
:::

Webpack 配置，以支持`.css`后缀

```js
resolve: {
  extensions: [".css"];
}
```
