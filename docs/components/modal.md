---
tags:
  - 弹框
  - 提示框
  - dialog
---

# 模态对话框

:::tip 来源
小程序：`wx.showModal()`
:::

[[toc]]

## 基础用法

<com-show>

```js
this.$modal({
  title: "提示",
  content: "这是一个模态对话框",
});
```

  <template v-slot:show>
    <com-button @click="test">提示框</com-button>
  </template>
</com-show>

## 高级用法

### 对齐方式

配置`align`设置对齐方式，其中`indent`代表首行缩进两个字符

<com-show>

```js
this.$modal({
  title: "提示",
  content: "这是一个模态对话框",
  align: "indent",
});
```

  <template v-slot:show>
    <com-button @click="test1">提示框</com-button>
  </template>
</com-show>

### 回调函数

`success`代表点击`确定`后的回调函数

<com-show>

```js
this.$modal({
  title: "提示",
  content: "这是一个模态对话框",
  confirm: () => {
    alert("Confirm");
  },
  cancel: () => {
    alert("Cancel");
  },
});
```

  <template v-slot:show>
    <com-button @click="test2">提示框</com-button>
  </template>
</com-show>

## 配置

### 属性

| 参数    | 信息                |  默认  | 必需  |   类型   |       可选值        |
| ------- | ------------------- | :----: | :---: | :------: | :-----------------: |
| title   | 标题文字            |   ——   | true  |  String  |         ——          |
| content | 弹框内容            |   ——   | false |  String  |         ——          |
| align   | `content`的对齐方式 | center | false |  String  | center/indent/right |
| confirm | 确认后回调函数      |   ——   | false | Function |         ——          |
| cancel  | 取消后回调函数      |   ——   | false | Function |         ——          |

<script>
export default {
  methods:{
    test(){
      this.$modal({
        title: "提示",
        content: "这是一个模态对话框",
      });
    },
    test1(){
      this.$modal({
        title: "提示",
        content: "这是一个模态对话框",
        align: "indent",
      });
    },
    test2(){
      this.$modal({
        title: "提示",
        content: "这是一个模态对话框",
        confirm: () => {
          alert("Confirm");
        },
        cancel: () => {
          alert("Cancel");
        },
      });
    },
    test3(){},
    test4(){}
  }
}
</script>
