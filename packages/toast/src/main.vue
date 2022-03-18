<template>
  <transition name="toast-fade">
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
      type: "success", //弹框的样式 success、warning、error
      offset: 20, //弹框默认的偏移量
      duration: 1000, //弹框消失的时间
      timer: null, //准备一个定时器
      closeFunc: null, //扩充一个功能 弹框消失后触发
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
      if (typeof this.closeFunc === "function") {
        this.closeFunc();
      }
    },
  },
};
</script>
