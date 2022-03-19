<template>
  <div class="musicbox">
    <ct-musicbox
      src="http://ws.stream.qqmusic.qq.com/C4000020tU1C2eCqBz.m4a?guid=739588096&vkey=5B9FD75004657101C35949C29488895608F922AD376AC2DC5A3B1E56E93DB7DF728F752D7C8242E49EEDA9B32495680F633230A71CC2D07D&uin=&fromtag=66"
      v-model="isPlay"
      :name="name"
      :color="color"
      :bgColor="bgColor"
      :width="width"
      ref="audioboxRef"
    >
    </ct-musicbox>
  </div>
</template>

<script>
export default {
  name: "musicbox",
  props: {
    name: {
      default: "明月星辰可见否",
    },
    color: {
      default: "#b42b51",
      type: String,
    },
    bgColor: {
      default: "#efefef",
      type: String,
    },
    refer: {
      default: "audio",
      type: String,
    },
    width: {
      default: 100,
    },
  },
  data() {
    return {
      isPlay: false,
    };
  },
  methods: {
    test() {},
  },
};
</script>

<style>
.musicbox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
