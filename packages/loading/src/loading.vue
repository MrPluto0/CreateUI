<template>
  <transition name="fade-scale">
    <div
      v-show="visible"
      class="ct-loading"
      :style="{
        '--bgColor': bgColor,
        '--spinnerColor': spinnerColor,
        '--fontColor': fontColor,
      }"
    >
      <div class="ct-loading-box">
        <div
          v-if="spinner === ''"
          :class="'ct-loading-anime__' + animeStyle"
        ></div>
        <div v-else class="ct-loading__spinner" :class="spinner"></div>

        <div v-if="text !== ''" class="ct-loading__title">{{ text }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
import "../../theme/loading.less";

export default {
  name: "CtLoading",
  data() {
    return {
      visible: false,
      text: "Loading...",
      animeStyle: "normal",
      spinner: "",
      spinnerColor: "#0ba5f8",
      fontColor: "#008fdb",
      bgColor: "rgba(0, 0, 0, 0.6)",
    };
  },
};
</script>
