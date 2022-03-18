---
tags:
  - 聊天
  - chat
  - bubble
---

# 畅聊气泡

::: tip 创意来源
`Quasar`的聊天组件：[chat](http://www.quasarchs.com/vue-components/chat)
:::

[[toc]]

## 基础用法

配置`text`属性来设置消息内容，`sent`代表发送方向。

<com-show>
  ```html
  <com-show>
    <ct-chatbox :text="['Hello, John']"></ct-chatbox>
    <ct-chatbox sent :text="['Hello']"></ct-chatbox>
    <ct-chatbox :text="['Hello, How are you?']"></ct-chatbox>
  </com-show>
  ```
  <template v-slot:show>
    <ct-chatbox :text="['Hello, John']"></ct-chatbox>
    <ct-chatbox sent :text="['Hello']"></ct-chatbox>
    <ct-chatbox :text="['Hello, How are you?']"></ct-chatbox>
  </template>
</com-show>

## 高级用法

### 昵称

配置`name`来设置发送方的头像。

<com-show>
  ```html
  <ct-chatbox
    :text="['Hello, John']"
    name="Gypsophlia"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hello']"
    name="Gypsophlia"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  <ct-chatbox
    :text="['Hello, How are you?']"
    name="Gypsophlia"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  ```
  <template v-slot:show>
    <ct-chatbox
      :text="['Hello, John']"
      name="Gypsophlia"
    ></ct-chatbox>
    <ct-chatbox 
      sent 
      :text="['Hello']"
      name="Gypsophlia"
    ></ct-chatbox>
    <ct-chatbox
      :text="['Hello, How are you?']"
      name="Gypsophlia"
    ></ct-chatbox>
  </template>
</com-show>

### 头像

配置`avatar`来设置消息发送方的头像。

<com-show>
  ```html
  <ct-chatbox
    :text="['Hello, John']"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hello']"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  <ct-chatbox
    :text="['Hello, How are you?']"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  ```
  <template v-slot:show>  
    <ct-chatbox
      :text="['Hello, John']"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    ></ct-chatbox>
    <ct-chatbox
      sent
      :text="['Hello']"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    ></ct-chatbox>
    <ct-chatbox
      :text="['Hello, How are you?']"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    ></ct-chatbox>
  </template>
</com-show>

### 时间戳

配置`stamp`来设置消息的时间戳

<com-show>
  ```html
  <ct-chatbox :text="['Hello, John']" stamp="3 minutes ago"></ct-chatbox>
  <ct-chatbox sent :text="['Hello']" stamp="4 minutes ago"></ct-chatbox>
  <ct-chatbox :text="['Hello, How are you?']" stamp="4 minutes ago"></ct-chatbox>
  ```
  <template v-slot:show>  
    <ct-chatbox
      :text="['Hello, John']"
      stamp="3 minutes ago"
    ></ct-chatbox>
    <ct-chatbox
      sent
      :text="['Hello']"
      stamp="4 minutes ago"
    ></ct-chatbox>
    <ct-chatbox
      :text="['Hello, How are you?']"
      stamp="4 minutes ago"
    ></ct-chatbox>
  </template>
</com-show>

### 背景颜色

配置`bgColor`设置气泡的颜色

<com-show>
  ```html
  <ct-chatbox
    :text="['Hello, John']"
    name="Gypsophlia"
    stamp="3 minutes ago"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    bgColor="skyblue"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hello']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    bgColor="#ecb959"
  ></ct-chatbox>
  <ct-chatbox
    :text="['Hello, How are you?']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    bgColor="#3dbf6c"
  ></ct-chatbox>
  ```
  <template v-slot:show>  
    <ct-chatbox
      :text="['Hello, John']"
      name="Gypsophlia"
      stamp="3 minutes ago"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
      bgColor="skyblue"
    ></ct-chatbox>
    <ct-chatbox
      sent
      :text="['Hello']"
      name="Gypsophlia"
      stamp="4 minutes ago"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
      bgColor="#ecb959"
    ></ct-chatbox>
    <ct-chatbox
      :text="['Hello, How are you?']"
      name="Gypsophlia"
      stamp="4 minutes ago"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
      bgColor="#3dbf6c"
    ></ct-chatbox>
  </template>
</com-show>

### 连续消息

配置`text`数组写入连续的消息。

<com-show>
  ```html
  <ct-chatbox :text="['Hello, John']"></ct-chatbox>
  <ct-chatbox sent :text="['Hi, Jim', 'How are you?']"></ct-chatbox>
  <ct-chatbox :text="['I am fine.', 'What about you?']"></ct-chatbox>
  <ct-chatbox sent :text="['I am OK, too.', 'Thanks!']"></ct-chatbox>
  ```
  <template v-slot:show>
    <ct-chatbox
      :text="['Hello, John']"
    ></ct-chatbox>
    <ct-chatbox
      sent
      :text="['Hi, Jim', 'How are you?']"
    ></ct-chatbox>
    <ct-chatbox
      :text="['I am fine.', 'What about you?']"
    ></ct-chatbox>
    <ct-chatbox
      sent
      :text="['I am OK, too.', 'Thanks!']"
    ></ct-chatbox>
  </template>
</com-show>

## 配置项

### 属性

| 参数    | 信息       | 默认  | 必需  |  类型   |
| ------- | ---------- | :---: | :---: | :-----: |
| text    | 消息文本   |  ——   | true  |  Array  |
| name    | 发送者昵称 |  ——   | false | String  |
| avatar  | 发送者头像 |  ——   | false | String  |
| stamp   | 时间戳     |  ——   | false | String  |
| bgColor | 背景颜色   |  ——   | false | String  |
| sent    | 发送方向   | false | false | Boolean |
