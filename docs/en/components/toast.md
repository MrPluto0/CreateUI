---
tags:
  - 通知
  - 提醒
  - message
  - remind
---

# 消息提示框

:::tip 来源
小程序：`wx.showToast()`
:::

[[toc]]

## 基础用法

通过`this.$toast`来弹出提示框。

<com-show>

```js
this.$toast.info("这是一个弹窗");
```

  <template v-slot:show>
    <com-button @click="test">提示框</com-button>
  </template>
</com-show>

## 高级用法

### 提示类型

<com-show>

```js
this.$toast.info("这是一个弹窗");
this.$toast.success("这是一个弹窗");
this.$toast.warning("这是一个弹窗");
this.$toast.error("这是一个弹窗");
```

  <template v-slot:show>
    <com-button @click="test1">提示框</com-button>
  </template>
</com-show>

### 延迟时间

<com-show>

```js
this.$toast({
  content: "这是一个弹窗",
  type: "info",
  duration: 2000,
});
```

  <template v-slot:show>
    <com-button @click="test2">提示框</com-button>
  </template>
</com-show>

### 顶部偏移

<com-show>

```js
this.$toast({
  content: "这是一个弹窗",
  type: "info",
  offset: 100,
});
```

  <template v-slot:show>
    <com-button @click="test3">提示框</com-button>
  </template>
</com-show>

### 回调函数（待完成）

<com-show>

```js
this.$toast({
  content: "这是一个弹窗",
  type: "info",
  closeFunc: () => {
    alert("消失后的回调函数");
  },
});
```

  <template v-slot:show>
    <com-button @click="test4">提示框</com-button>
  </template>
</com-show>

## 配置

### 属性

| 参数      | 信息             |  默认   | 必需  |   类型   |
| --------- | ---------------- | :-----: | :---: | :------: |
| type      | 弹框类型         | success | true  |  Array   |
| content   | 弹框文字         |   ——    | false |  String  |
| duration  | 显示时延         |  1000   | false |  Number  |
| offset    | 顶部偏移         |   20    | false |  Number  |
| closeFunc | 消失后的回调函数 |   ——    | false | Function |

<script>
export default {
  methods:{
    test(){
      this.$toast.info("这是一个弹窗");
    },
    test1(){
      this.$toast.info("这是一个弹窗");
      this.$toast.success("这是一个弹窗");
      this.$toast.warning("这是一个弹窗");
      this.$toast.error("这是一个弹窗");
    },
    test2(){
      this.$toast({
        content:"这是一个弹窗",
        type:"info",
        duration:2000,
      });
    },
    test3(){
      this.$toast({
        content:"这是一个弹窗",
        type:"info",
        offset:100,
      });  
    },
    test4(){
      this.$toast({
        content:"这是一个弹窗",
        type:"info",
        closeFunc: () => {
          alert("消失后的回调函数");
        },
      });
    }
  }
}
</script>
