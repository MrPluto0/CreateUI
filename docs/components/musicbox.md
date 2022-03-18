# 八音盒

## 基本使用

```html
<audiobox
  :src="require('@/assets/music.mp3')"
  musicName="Your Moon My Heart"
  v-model="isPlay"
  @handleEnded="cbFunc"
>
</audiobox>
```

## 配置

### 属性

| Params    | Info                           |      Default      | Required |
| --------- | ------------------------------ | :---------------: | :------: |
| src       | 传入 require 后的音乐资源      |       null        |  false   |
| color     | 按钮与进度条的颜色             |      #b42b51      |  false   |
| musicName | 音乐名                         | "Your music name" |  false   |
| v-model   | 必填，双向绑定，可控制音乐播放 |       true        |   true   |

### 事件

| Event       | Info         |
| ----------- | ------------ |
| handleEnded | 音乐播放结束 |

### Ref

组件中的函数，直接通过`this.$refs.audio.FunctionName()调用`

| Function         | Info                        |
| ---------------- | --------------------------- |
| getAudioCtx      | 获取 Audio 上下文           |
| getAudioAnalyser | 获取 Audio Api 创建的分析器 |
