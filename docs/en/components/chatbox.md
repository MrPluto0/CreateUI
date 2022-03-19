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
    <ct-chatbox :text="['早上好']"></ct-chatbox>
    <ct-chatbox sent :text="['早上好呀']"></ct-chatbox>
    <ct-chatbox :text="['祝你这一天过的愉快]"></ct-chatbox>
  </com-show>
  ```
  <template v-slot:show>
    <ct-chatbox :text="['早上好']"></ct-chatbox>
    <ct-chatbox sent :text="['早上好呀']"></ct-chatbox>
    <ct-chatbox :text="['祝你这一天过的愉快']"></ct-chatbox>
  </template>
</com-show>

## 高级用法

### 昵称

配置`name`来设置发送方的昵称。

<com-show>
  ```html
  <ct-chatbox
    :text="['早上好呀']"
    name="Gypsophlia"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['嘿，早上好']"
    name="Gypsophlia"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  <ct-chatbox
    :text="['祝你拥有愉快的一天！']"
    name="Gypsophlia"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  ```
  <template v-slot:show>
    <ct-chatbox
      :text="['早上好呀']"
      name="Gypsophlia"
    ></ct-chatbox>
    <ct-chatbox 
      sent 
      :text="['嘿，早上好']"
      name="Gypsophlia"
    ></ct-chatbox>
    <ct-chatbox
      :text="['祝你拥有愉快的一天！']"
      name="Gypsophlia"
    ></ct-chatbox>
  </template>
</com-show>

### 头像

配置`avatar`来设置消息发送方的头像。

<com-show>
  ```html
  <ct-chatbox
    :text="['早上好呀']"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['嘿，早上好']"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  <ct-chatbox
    :text="['祝你拥有愉快的一天！']"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  ```
  <template v-slot:show>  
    <ct-chatbox
      :text="['早上好呀']"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    ></ct-chatbox>
    <ct-chatbox
      sent
      :text="['嘿，早上好']"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    ></ct-chatbox>
    <ct-chatbox
      :text="['祝你拥有愉快的一天！']"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    ></ct-chatbox>
  </template>
</com-show>

### 时间戳

配置`stamp`来设置消息的时间戳

<com-show>
  ```html
  <ct-chatbox :text="['早上好呀']" stamp="3 minutes ago"></ct-chatbox>
  <ct-chatbox sent :text="['嘿，早上好']" stamp="4 minutes ago"></ct-chatbox>
  <ct-chatbox :text="['祝你拥有愉快的一天！']" stamp="4 minutes ago"></ct-chatbox>
  ```
  <template v-slot:show>  
    <ct-chatbox
      :text="['早上好呀']"
      stamp="3 minutes ago"
    ></ct-chatbox>
    <ct-chatbox
      sent
      :text="['嘿，早上好']"
      stamp="4 minutes ago"
    ></ct-chatbox>
    <ct-chatbox
      :text="['祝你拥有愉快的一天！']"
      stamp="4 minutes ago"
    ></ct-chatbox>
  </template>
</com-show>

### 背景颜色

配置`bgColor`设置气泡的颜色

<com-show>
  ```html
  <ct-chatbox
    :text="['早上好呀']"
    name="Gypsophlia"
    stamp="3 minutes ago"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    bgColor="skyblue"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['嘿，早上好']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    bgColor="#ecb959"
  ></ct-chatbox>
  <ct-chatbox
    :text="['祝你拥有愉快的一天！']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    bgColor="#3dbf6c"
  ></ct-chatbox>
  ```
  <template v-slot:show>  
    <ct-chatbox
      :text="['早上好呀']"
      name="Gypsophlia"
      stamp="3 minutes ago"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
      bgColor="skyblue"
    ></ct-chatbox>
    <ct-chatbox
      sent
      :text="['嘿，早上好']"
      name="Gypsophlia"
      stamp="4 minutes ago"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
      bgColor="#ecb959"
    ></ct-chatbox>
    <ct-chatbox
      :text="['祝你拥有愉快的一天！']"
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
  <ct-chatbox :text="['早上好呀']"></ct-chatbox>
  <ct-chatbox sent :text="[
    '早上好呀', 
    '如果我见不到你的话',
    '那就祝你中午好，晚上好，并且晚安'
    ]"></ct-chatbox>
  <ct-chatbox :text="['哈哈，好的']"></ct-chatbox>
  ```
  <template v-slot:show>
    <ct-chatbox :text="['早上好呀']"></ct-chatbox>
    <ct-chatbox sent :text="[
      '早上好呀', 
      '如果我见不到你的话',
      '那就祝你中午好，晚上好，并且晚安'
      ]"></ct-chatbox>
    <ct-chatbox :text="['哈哈，好的']"></ct-chatbox>
  </template>
</com-show>

### 气泡宽度

配置`width`属性设置气泡宽度。

<com-show>
  ```html
  <ct-chatbox :width="400" :text="[
    '谁让你读了这么多书，又知道了双水村以外还有个大世界……如果从小你就在这个天地里日出而作，日落而息，那你现在就会和众乡亲抱同一理想： \
    经过几年的辛劳，像大哥一样娶个满意的媳妇，生个胖儿子，加上你的体魄，会成为一名出色的庄稼人。不幸的是，你知道的太多了，思考的太多了，\
    因此才有了这种不能为周围人所理解的苦恼。'
  ]"></ct-chatbox>
  <ct-chatbox sent :text="['而我认为这种苦恼并不是一种不幸。']"></ct-chatbox>
  ```
  <template v-slot:show>
    <ct-chatbox :width="400" :text="[
      '谁让你读了这么多书，又知道了双水村以外还有个大世界……如果从小你就在这个天地里日出而作，日落而息，那你现在就会和众乡亲抱同一理想：\
      经过几年的辛劳，像大哥一样娶个满意的媳妇，生个胖儿子，加上你的体魄，会成为一名出色的庄稼人。不幸的是，你知道的太多了，思考的太多了，\
      因此才有了这种不能为周围人所理解的苦恼。'
    ]"></ct-chatbox>
    <ct-chatbox sent :text="['而我认为这种苦恼并不是一种不幸。']"></ct-chatbox>
  </template>
</com-show>

## 配置项

### 属性

| 参数    | 信息       |  默认   | 必需  |  类型   |
| ------- | ---------- | :-----: | :---: | :-----: |
| text    | 消息文本   |   ——    | true  |  Array  |
| name    | 发送者昵称 |   ——    | false | String  |
| avatar  | 发送者头像 |   ——    | false | String  |
| stamp   | 时间戳     |   ——    | false | String  |
| bgColor | 背景颜色   |   ——    | false | String  |
| width   | 气泡宽度   | 300(px) | false | Number  |
| sent    | 发送方向   |  false  | false | Boolean |
