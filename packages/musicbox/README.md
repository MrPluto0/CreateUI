# Vue-Audio-Box
自定义音乐盒子

目前vue2.x测试完成

## Install
- npm 
`npm install vue-audiobox`

- yarn
`yarn add vue-audiobox`

## Usage
```js
//main.js
import audiobox from 'vue-audiobox';
Vue.use(audiobox);

// xxx.vue
<audiobox 
    :src="require('@/assets/music.mp3')" 
    musicName="Your Moon My Heart"
    v-model="isPlay"
    @handleEnded="cbFunc">
</audiobox>
```

## Settings
- Attributes
  
| Params    | Default           | Info                           |
| --------- | ----------------- | ------------------------------ |
| src       | null              | 传入require后的音乐资源        |
| color     | #b42b51           | 按钮与进度条的颜色             |
| musicName | "Your music name" | 音乐名                         |
| v-model   | true              | 必填，双向绑定，可控制音乐播放 |

- Events

| Event       | Info         |
| ----------- | ------------ |
| handleEnded | 音乐播放结束 |

- Ref Api
  
组件中的函数，直接通过`this.$refs.audio.FunctionName()调用`

| Function         | Info                      |
| ---------------- | ------------------------- |
| getAudioCtx      | 获取Audio上下文           |
| getAudioAnalyser | 获取Audio Api创建的分析器 |

## Reference