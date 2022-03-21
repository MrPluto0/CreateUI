---
tags:
  - 音乐
  - 音乐盒
  - music
  - musicbox
---

# 八音盒

::: tip 来源
完成个人博客时定制背景音乐的播放组件。
:::

[[toc]]

## 基础用法

> 未来音乐盒的 UI 多多改善

配置`src`传入音乐资源，`v-model`为必填项。

<com-show>
  ```html
    <ct-musicbox
      src="assets/gypsophila.mp3"
      name="明月星辰可见否"
      v-model="isPlay"
    >
    </ct-musicbox>
  ```
  <template v-slot:show>
    <div class="musicbox">
      <ct-musicbox
        :src="src"
        name="明月星辰可见否"
        v-model="isPlay"
        color="#5659e8"
      >
      </ct-musicbox>
    </div>
  </template>
</com-show>

## 高级用法

### 主体颜色

配置`color`来设置主体颜色，包括加载条，按钮，边框。

<com-show>
  ```html
    <ct-musicbox
      src="assets/gypsophila.mp3"
      name="明月星辰可见否"
      v-model="isPlay"
      color="#b42b51"
    >
    </ct-musicbox>
  ```
  <template v-slot:show>
    <div class="musicbox">
      <ct-musicbox
        :src="src"
        name="明月星辰可见否"
        v-model="isPlay1"
      >
      </ct-musicbox>
    </div>
  </template>
</com-show>

### 背景颜色

配置`color`来设置主体颜色，包括进度条，按钮，边框。

<com-show>
  ```html
    <ct-musicbox
      src="assets/gypsophila.mp3"
      name="明月星辰可见否"
      v-model="isPlay"
      bgColor="#cadeea"
    >
    </ct-musicbox>
  ```
  <template v-slot:show>
    <div class="musicbox">
      <ct-musicbox
        :src="src"
        name="明月星辰可见否"
        v-model="isPlay2"
        color="#5659e8"
        bgColor="#cadeea"
      >
      </ct-musicbox>
    </div>
  </template>
</com-show>

### 进度条长度

配置`width`来设置进度条的长度。

<com-show>
  ```html
    <ct-musicbox
      src="assets/gypsophila.mp3"
      name="明月星辰可见否"
      v-model="isPlay"
      width="150"
    >
    </ct-musicbox>
  ```
  <template v-slot:show>
    <div class="musicbox">
      <ct-musicbox
        :src="src"
        name="明月星辰可见否"
        v-model="isPlay3"
        color="#5659e8"
        width="150"
      >
      </ct-musicbox>
    </div>
  </template>
</com-show>

### Ref 引用

:::tip 注意区别
`refer`是内部封装的`<audio>`标签的引用，考虑到多个音乐盒存在时内部`audio`的冲突。
而要使用音乐盒部的函数，需要将`ref`作用于音乐盒本身。
:::

配置`refer`来设置`audio`的`ref`，以便操作元素。

<com-show>
  ```html{4}
    <ct-musicbox
      src="assets/gypsophila.mp3"
      name="明月星辰可见否"
      v-model="isPlay"
      refer="audioRef"
    >
    </ct-musicbox>
  ```
  <template v-slot:show>
    <div class="musicbox">
      <ct-musicbox
        :src="src"
        name="明月星辰可见否"
        v-model="isPlay4"
        refer="audioRef"
        color="#5659e8"
      >
      </ct-musicbox>
    </div>
  </template>
</com-show>

### Audio 上下文

通过`getAudioCtx`来获取音频的上下文环境。

```html{6}
<ct-musicbox
  src="assets/gypsophila.mp3"
  name="明月星辰可见否"
  v-model="isPlay"
  refer="audioRef"
  ref="audioboxRef"
>
</ct-musicbox>
```

```js
this.$refs.audioboxRef.getAudioCtx(); // [object AudioContext]
```

### Audio 分析器

通过`getAudioAnalyser`来获取音频的分析器，通过分析器可提取音频数据，从而进行音频可视化。

```html{6}
<ct-musicbox
  src="assets/gypsophila.mp3"
  name="明月星辰可见否"
  v-model="isPlay"
  refer="audioRef"
  ref="audioboxRef"
>
</ct-musicbox>
```

```js
this.$refs.audioboxRef.getAudioAnalyser();
```

## 配置

### 属性

| 参数    | 信息                     |       默认        | 必需  |  类型   |
| ------- | ------------------------ | :---------------: | :---: | :-----: |
| v-model | 双向绑定，可控制音乐播放 |       false       | true  | Boolean |
| src     | 播放的音乐资源           |       null        | true  |   ——    |
| name    | 音乐名                   | "Your music name" | false | String  |
| color   | 按钮，进度条，边框的颜色 |      #5659e8      | false | String  |
| bgColor | 背景颜色                 |      #efefef      | false | String  |
| width   | 进度条长度               |      100(px)      | false | Number  |
| refer   | 内部`audio`的`ref`       |       audio       | false | String  |

### 事件

| 事件        | 信息         |
| ----------- | ------------ |
| handleEnded | 音乐播放结束 |

### Ref

组件中的函数，直接通过`this.$refs.audio.FunctionName()调用`

| 函数             | 信息                        |
| ---------------- | --------------------------- |
| getAudioCtx      | 获取 Audio 上下文           |
| getAudioAnalyser | 获取 Audio Api 创建的分析器 |

<script>
export default {
  data() {
    return {
      src: "https://link.hhtjim.com/163/517346741.mp3",
      isPlay: false,
      isPlay1: false,
      isPlay2: false,
      isPlay3: false,
      isPlay4: false,
    };
  },
};
</script>
<style scoped>
.musicbox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
