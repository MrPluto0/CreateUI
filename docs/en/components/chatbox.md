---
tags:
  - 聊天
  - chat
  - bubble
---

# Chatting Bubble

::: tip From
Component of `Quasar`：[chat](http://www.quasarchs.com/vue-components/chat)
:::

[[toc]]

## Basic Usage

Set message text by `text`.

`sent` represents the direction to send.

<com-show>
  ```html
  <ct-chatbox :text="['Good Morning!']"></ct-chatbox>
  <ct-chatbox sent :text="['Good Morning!']"></ct-chatbox>
  <ct-chatbox :text="['Have a nice day~]"></ct-chatbox>
  ```
  <template v-slot:show>
    <ct-chatbox :text="['Good Morning!']"></ct-chatbox>
    <ct-chatbox sent :text="['Good Morning!']"></ct-chatbox>
    <ct-chatbox :text="['Have a nice day~']"></ct-chatbox>
  </template>
</com-show>

## Adanced Usage

### Nickname

Set nickname from sender by `name`.

<com-show>
  ```html
  <ct-chatbox
    :text="['Good Morning!']"
    name="Gypsophlia"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hey, Good Morning!']"
    name="Gypsophlia"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  <ct-chatbox
    :text="['Having a nice day!']"
    name="Gypsophlia"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
  ></ct-chatbox>
  ```
  <template v-slot:show>
    <ct-chatbox
      :text="['Good Morning!']"
      name="Gypsophlia"
    ></ct-chatbox>
    <ct-chatbox 
      sent 
      :text="['Hey, Good Morning!']"
      name="Gypsophlia"
    ></ct-chatbox>
    <ct-chatbox
      :text="['Having a nice day!']"
      name="Gypsophlia"
    ></ct-chatbox>
  </template>
</com-show>

### Avatar

Set the avatar from sender by `avatar`.

<com-show>

```html
<ct-chatbox
  :text="['Good Morning!']"
  avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
></ct-chatbox>
<ct-chatbox
  sent
  :text="['Hey, Good Morning!']"
  avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
></ct-chatbox>
<ct-chatbox
  :text="['Having a nice day!']"
  avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
></ct-chatbox>
```

  <template v-slot:show>  
    <ct-chatbox
      :text="['Good Morning!']"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    ></ct-chatbox>
    <ct-chatbox
      sent
      :text="['Hey, Good Morning!']"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    ></ct-chatbox>
    <ct-chatbox
      :text="['Having a nice day!']"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    ></ct-chatbox>
  </template>
</com-show>

### TimeStamp

Set the timestamp of the msg by `stamp`.

<com-show>
  ```html
  <ct-chatbox :text="['Good Morning!']" stamp="3 minutes ago"></ct-chatbox>
  <ct-chatbox sent :text="['Hey, Good Morning!']" stamp="4 minutes ago"></ct-chatbox>
  <ct-chatbox :text="['Having a nice day!']" stamp="4 minutes ago"></ct-chatbox>
  ```
  <template v-slot:show>  
    <ct-chatbox
      :text="['Good Morning!']"
      stamp="3 minutes ago"
    ></ct-chatbox>
    <ct-chatbox
      sent
      :text="['Hey, Good Morning!']"
      stamp="4 minutes ago"
    ></ct-chatbox>
    <ct-chatbox
      :text="['Having a nice day!']"
      stamp="4 minutes ago"
    ></ct-chatbox>
  </template>
</com-show>

### Background Color

Set the background color of the bubble by `bgColor`.

<com-show>
  ```html
  <ct-chatbox
    :text="['Good Morning!']"
    name="Gypsophlia"
    stamp="3 minutes ago"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    bgColor="skyblue"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hey, Good Morning!']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    bgColor="#ecb959"
  ></ct-chatbox>
  <ct-chatbox
    :text="['Having a nice day!']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    bgColor="#3dbf6c"
  ></ct-chatbox>
  ```
  <template v-slot:show>  
    <ct-chatbox
      :text="['Good Morning!']"
      name="Gypsophlia"
      stamp="3 minutes ago"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
      bgColor="skyblue"
    ></ct-chatbox>
    <ct-chatbox
      sent
      :text="['Hey, Good Morning!']"
      name="Gypsophlia"
      stamp="4 minutes ago"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
      bgColor="#ecb959"
    ></ct-chatbox>
    <ct-chatbox
      :text="['Having a nice day!']"
      name="Gypsophlia"
      stamp="4 minutes ago"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
      bgColor="#3dbf6c"
    ></ct-chatbox>
  </template>
</com-show>

### Successive Msgs

Set the successive messages by `text` of `Array` Type.

<com-show>
  ```html
  <ct-chatbox :text="['Good Morning!']"></ct-chatbox>
  <ct-chatbox sent :text="[
    'Good Morning!', 
    'If I don not see you,',
    'Then good afternoon, good evening and good night.'
    ]"></ct-chatbox>
  <ct-chatbox :text="['Haha, OK!']"></ct-chatbox>
  ```
  <template v-slot:show>
    <ct-chatbox :text="['Good Morning!']"></ct-chatbox>
    <ct-chatbox sent :text="[
      'Good Morning!', 
      'If I don not see you,',
      'Then good afternoon, good evening and good night.'
      ]"></ct-chatbox>
    <ct-chatbox :text="['Haha, OK!']"></ct-chatbox>
  </template>
</com-show>

### Bubble width

Set the max width of bubble by `width`.

<com-show>
  ```html
  <ct-chatbox :width="400" :text="['But Cartier still often wrote letter for me, which said he always miss everything of that summer.']"></ct-chatbox>
  <ct-chatbox sent :text="['I have to say, a man will become a red pig when he is thirty years old.']"></ct-chatbox>
  ```
  <template v-slot:show>
    <ct-chatbox :width="400" :text="['But Cartier still often wrote letter for me, which said he always miss everything of that summer.']"></ct-chatbox>
    <ct-chatbox sent :text="['I have to say, a man will become a red pig when he is thirty years old.']"></ct-chatbox>
  </template>
</com-show>

## Configure

### Attributes

| Param   | Info                           | Default | Required |  Type   |
| ------- | ------------------------------ | :-----: | :------: | :-----: |
| text    | the conetnt of msg             |   ——    |   true   |  Array  |
| name    | the nickname of sender         |   ——    |  false   | String  |
| avatar  | the avatar of sender           |   ——    |  false   | String  |
| stamp   | the timestamp of msg           |   ——    |  false   | String  |
| bgColor | the background color of bubble |   ——    |  false   | String  |
| width   | the max width of bubble        | 300(px) |  false   | Number  |
| sent    | the direction to send          |  false  |  false   | Boolean |
