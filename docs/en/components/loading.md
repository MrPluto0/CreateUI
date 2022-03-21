---
tags:
  - 加载
  - load
---

# 加载动画

:::tip 来源
`ElementUI`的`Loading`
:::

[[toc]]

## 基本用法

:::tip
注意区别两种使用方法
:::

- 指令

通过`v-loading`指令来设置当前标签的加载动画。

<com-show>
  ```html
  <div style="height:200px" v-loading="loading"></div>
  ```
  <template v-slot:show>
    <div style="height:200px" v-loading="loading"></div>
  </template>
</com-show>

- 服务

通过`this.$loading`全局函数来加载动画。

<com-show>

```html
<div style="height:200px" ref="loading"></div>
```

```js
this.$loading({
  target: this.$refs.loading,
  data: {
    text: "加载动画",
  },
});
```

  <template v-slot:show>
    <div style="height:150px;background-color:white" ref="loading"></div>
    <com-button style="margin-top:10px" @click="test1">开/关</com-button>
  </template>
</com-show>

## 高级用法

### 全屏加载

- 指令

<com-show>
  ```html
  <div v-loading.fullscreen="loading"></div>
  ```
  <template v-slot:show>
    <com-button @click="test2">开/关</com-button>
    <div v-loading.fullscreen="loading2"></div>
  </template>
</com-show>

- 服务

<com-show>

```js
this.$loading({
  fullscreen: true,
});
```

  <template v-slot:show>
    <com-button @click="test3">开/关</com-button>
  </template>
</com-show>

### 配置选项

- 指令

指令的配置主要通过指令传参的方式完成: `v-loading:[options]`

<com-show>

```js
data() {
  return {
    options: {
      text:"加载文字",
      animeStyle: "moon",
      bgColor: "#9a9bdd",
      fontColor: "white",
    },
    loading: true
  }
}
```

  <template v-slot:show>
    <div style="height:200px" v-loading:[options]="loading3"></div>
  </template>
</com-show>

- 服务

<com-show>

```js
this.$loading({
  target: this.$refs.loadingOptions,
  data: {
    text: "自定义文字",
    spinner: "iconfont icon-jiazai",
    fontColor: "white",
    bgColor: "rgba(100,200,100,.3)",
  },
});
```

  <template v-slot:show>
    <div style="height:100px" ref="loadingOptions"></div>
    <com-button style="margin-top:10px" @click="test4">开/关</com-button>
  </template>
</com-show>

```js
this.$loading({
  target: this.$refs.loading,
  data: {
    text: "加载动画",
  },
});
```

### 加载控制

- 指令

直接通过控制`loading`变量的值即可控制加载与否。

```js
this.loading = false;
```

- 服务

需要调用实例的`close`函数才可关闭。

```js{1,8}
let instance = this.$loading({
  target: this.$refs.loading,
  data:{
    text: "加载动画"
  }
});
setTimeout(()=>{
  instance.close();
},1500);
```

## 配置

### 属性

| 参数       | 信息               |    默认    |  必需  |  类型  | 可选值      |
| ---------- | ------------------ | :--------: | :----: | :----: | ----------- |
| text       | 加载时的文本内容   | loading... | false  | String | ——          |
| animeStyle | 内置的加载动画样式 |   normal   | false  | String | normal/moon |
| spinner    | 自定义加载图标类   |     ——     | false  | String | ——          |
| fontColor  | 文字颜色           |     ——     | false  | String | ——          |
| bgColor    | 背景颜色           |     ——     | String |   ——   | ——          |

### 函数

> 实例上的成员函数

| 函数名 | 信息             |
| ------ | ---------------- |
| close  | 关闭当前加载动画 |

<script>
export default {
  data() {
    return {
      loading:true,
      loading2: false,
      loading3: true,
      options: {
        text:"加载文字",
        animeStyle: "moon",
        bgColor: "#9a9bdd",
        fontColor: "white",
      }
    }
  },
  methods: {
    test1(){
      let instance = this.$loading({
        target: this.$refs.loading,
        data:{
          text: "加载动画"
        }
      });
      setTimeout(()=>{
        instance.close();
      },1500);
    },
    test2() {
      this.loading2 = true;
      setTimeout(()=>{
        this.loading2 = false;
      },1500)
    },
    test3() {
      let instance = this.$loading({
        fullscreen: true,
        target: this.$refs.loading
      });
      setTimeout(()=>{
        instance.close();
      },1500);
    },
    test4(){
      let instance = this.$loading({
        target: this.$refs.loadingOptions,
        data: {
          text: "自定义文字",
          spinner: "iconfont icon-jiazai",
          fontColor: "white",
          bgColor: "rgba(100,200,100,.4)",
        },
      });
      setTimeout(()=>{
        instance.close();
      },1500);
    }
  }
}
</script>
