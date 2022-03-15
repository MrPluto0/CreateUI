<template>
  <transition name="ct-scaleFade">
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
          :class="'ct-loading-anime-' + animeStyle"
        ></div>
        <div v-else class="ct-loading-spinner" :class="spinner"></div>

        <div v-if="text !== ''" class="ct-loading-title">{{ text }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
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

<style lang="less" scoped>
.ct-loading {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bgColor);
}
.ct-loading-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  .ct-loading-anime-normal {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 5px solid rgba(189, 189, 189, 0.25);
    border-left: 5px solid var(--spinnerColor);
    border-top: 5px solid var(--spinnerColor);
    animation: rotate 1s infinite linear;
  }
  .ct-loading-anime-moon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border-left: 5px solid var(--spinnerColor);
    border-top: 5px solid var(--spinnerColor);
    animation: rotate 1.5s infinite ease-in-out alternate;
  }
  .ct-loading-spinner {
    color: var(--spinnerColor);
    font-size: 30px;
    animation: rotate 1.5s infinite linear;
  }
  .ct-loading-title {
    margin-top: 10px;
    color: var(--fontColor);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
