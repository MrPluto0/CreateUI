<template>
  <transition name="fade-vertical" appear>
    <div
      v-if="!closed"
      class="ct-toast-wrapper"
      :class="'ct-toast-' + type"
      :style="{ top: offset + 'px' }"
    >
      <p class="ct-toast-content">{{ content }}</p>
    </div>
  </transition>
</template>

<script>
import "../../theme/toast.less";

export default {
  name: "ct-toast",
  data() {
    return {
      closed: false,
      content: "提示信息",
      type: "success",
      offset: 20,
      duration: 1000,
      timer: null,
      ended: null,
    };
  },
  mounted() {
    this.timer = setTimeout(() => {
      if (!this.closed) {
        this.close();
      }
    }, this.duration);
  },
  methods: {
    close() {
      this.closed = true;
      //当弹框消失时会调用this.onClose()该函数方法
      if (this.ended && typeof this.ended === "function") {
        this.ended();
      }
    },
  },
};
</script>
