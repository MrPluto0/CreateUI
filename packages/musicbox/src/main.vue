<!--
 * @Descripttion: 
 * @Author: Gypsophlia
 * @Date: 2021-11-16 23:53:53
 * @LastEditTime: 2022-03-19 14:53:46
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
    <div class="ct-music-wrapper" :style="{ '--main-color': color }">
      <div class="ct-music-btn">
        <i
          class="iconfont"
          :class="isPlay ? 'icon-zanting' : 'icon-shipinbofangshibofang'"
          @click="togglePlay"
        ></i>
      </div>
      <div class="ct-music-process-wrapper">
        <div class="ct-music__name">{{ name }}</div>
        <div
          class="ct-music__process-fill"
          :style="{ width: sildePercent + '%' }"
        ></div>
        <div class="ct-music__process"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../theme/musicbox.less";

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
    name: {
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
    this.audio = this.$refs.audio;
    // check if context is in suspended state (autoplay policy)
    // if (this.audioCtx && this.audioCtx.state === "suspended") {
    //   this.audioCtx.resume();
    // }
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
