<template>
  <transition name="toast-fade">
    <div
      v-if="!closed"
      class="toast-wrapper"
      :class="'toast-' + type"
      :style="{ top: offset + 'px' }"
    >
      <p class="toast-content">{{ content }}</p>
    </div>
  </transition>
</template>

<script>
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

<style lang="less" scoped>
.toast-wrapper {
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  overflow: hidden;
  background-color: #edf2fc;
  border-radius: 5px;
  border: #ebeef5 solid 1px;
  padding: 10px 20px;
  min-width: 380px;
  left: 50%;
  top: 20px;
  transform: translate(-50%, 0%);
  transition: opacity 0.3s, transform 0.4s, top 0.4s;

  .toast-content {
    padding: 0;
    font-size: 14px;
    line-height: 1;
    text-align: center;
    width: 100%;
  }
}

.toast-info .toast-content {
  color: #909399;
}

.toast-success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;

  .toast-content {
    color: #67c23a;
  }
}

.toast-warning {
  background-color: #fdf6ec;
  border-color: #faecd8;

  .toast-content {
    color: #e6a23c;
  }
}

.toast-error {
  background-color: #fef0f0;
  border-color: #fde2e2;

  .toast-error .toast-content {
    color: #f56c6c;
  }
}

.toast-fade-enter,
.toast-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
  // transform: translateX(-50%) translateY(-100%);
}
</style>
