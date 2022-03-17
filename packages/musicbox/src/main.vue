<!--
 * @Descripttion: 
 * @Author: Gypsophlia
 * @Date: 2021-11-16 23:53:53
 * @LastEditTime: 2022-03-17 22:46:47
-->
<template>
  <div>
    <audio
      ref="audio"
      id="audio"
      @timeupdate="updateTime"
      @ended="ended"
      :src="src"
    ></audio>
    <div class="music-wrapper" :style="{ '--main-color': color }">
      <div class="btn">
        <i
          class="iconfont"
          :class="isPlay ? 'icon-zanting' : 'icon-shipinbofangshibofang'"
          @click="togglePlay"
        ></i>
      </div>
      <div class="process-wrapper">
        <div class="name">{{ musicName }}</div>
        <div class="process-fill" :style="{ width: sildePercent + '%' }"></div>
        <div class="process"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CtMusicbox",
  model: {
    prop: "isPlay",
    event: "input",
  },
  props: {
    src: {
      required: true,
      type: null,
    },
    musicName: {
      default: "Your Music Name",
      type: String,
    },
    color: {
      default: "#b42b51",
      type: String,
    },
    isPlay: {
      default: true,
      type: Boolean,
    },
  },

  data() {
    return {
      // isPlay: true,
      sildePercent: 0,
      audio: null,
      audioCtx: null,
      source: null,
    };
  },

  mounted() {
    if (this.$refs) this.audio = this.$refs.audio;
    // check if context is in suspended state (autoplay policy)
    // 继续被Context中止的音乐
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    this.audio.play();
  },

  methods: {
    togglePlay() {
      // 继续被Context中止的音乐
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
      if (!this.isPlay) {
        this.audio.play();
        // console.log("play");
      } else {
        this.audio.pause();
        // console.log("pause");
      }
      this.$emit("input", !this.isPlay);
    },

    // 更新进度条
    updateTime(e) {
      // console.log(this.audio.duration);
      // console.log(e.target.currentTime);
      this.sildePercent = parseInt(
        (e.target.currentTime / this.audio.duration) * 100
      );
    },

    // 播放结束
    ended() {
      this.$emit("input", false);
      // 响应父组件Event
      this.$emit("handleEnded");
    },

    // 获取上下文
    getAudioCtx() {
      return this.audioCtx;
    },

    // 获取Web Audio Api - Analyser
    getAudioAnalyser() {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();

      let { audioCtx } = this;
      const analyser = audioCtx.createAnalyser();
      const audioElement = document.getElementById("audio");

      this.source =
        this.source || audioCtx.createMediaElementSource(audioElement);
      this.source.connect(analyser);
      analyser.connect(audioCtx.destination);

      // 继续被Context中止的音乐
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      return analyser;
    },
  },
  watch: {
    isPlay(newval) {
      // 继续被Context中止的音乐
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
      if (newval) this.audio.play();
      else this.audio.pause();
    },
  },
};
</script>

<style src="../assets/css/iconfont.css"></style>
<style lang="less" scoped>
.music-wrapper {
  // 默认值
  --main-color: #b42b51;

  display: flex;
  border: 3px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  padding: 5px 10px;
  .btn {
    cursor: pointer;
    .iconfont {
      font-size: 30px;
      color: var(--main-color);
    }
  }
  .process-wrapper {
    margin: 0 10px;
    position: relative;
    .name {
      font-size: 15px;
    }
    .process-fill {
      z-index: 99;
      border-top: 4px solid var(--main-color);
      position: absolute;
      margin-top: 5px;
      // width: 50%;
      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: -6px;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background-color: var(--main-color);
      }
    }
    .process {
      border-top: 4px solid black;
      margin-top: 5px;
    }
  }
}
</style>
