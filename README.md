# CreateUI 组件库

## 功能

- [x] 全局加载
- [x] 按需加载
- [x] [介绍网站](https://mrpluto0.github.io/CreateUI/)
- [ ] 国际化配置

## 组件

- [x] Chatbox 畅聊气泡
- [x] Loading 加载动画
- [x] Toast 消息提示框
- [x] Modal 模态对话框
- [x] Musicbox 八音盒

## 安装

```
npm install @gypsophlia/create-ui -S
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

## 按需引入配置

### `babel-plugin-component`

安装插件

```
npm install babel-plugin-component -D
```

Babel 配置

```js
plugins: [
  [
    "component",
    {
      libraryName: "@gypsophlia/create-ui",
      styleLibrary: {
        name: "theme",
        base: false,
      },
    },
  ],
];
```

### `babel-plugin-import`

安装插件

```
npm install babel-plugin-import -D
```

Babel 配置

```js
plugins: [
  [
    "import",
    {
      libraryName: "@gypsophlia/create-ui",
      styleLibraryDirectory: "lib/theme",
    },
  ],
];
```

> 或将以下配置写入`vue.config.js`中的 `configureWebpack`中

Webpack 配置

```js
// webpack.config.js
resolve: {
  extensions: [".css"];
}
```
