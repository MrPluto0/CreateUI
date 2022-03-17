# CreateUI 组件库

## 功能

- [x] 全局加载
- [x] 按需加载
- [ ] 国际化配置
- [ ] 样例网站

## 组件

- [x] Chatbox 聊天盒
- [ ] Musicbox 音乐盒
- [x] Toast 通知弹窗
- [x] Modal 消息弹窗
- [x] Loading 加载框

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

### `babel-plugin-import`

安装插件

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

> 或将以下配置写入`vue.config.js`中的 `configureWebpack`中

Webpack 配置

```js
// webpack.config.js
resolve: {
  extensions: [".css"];
}
```
