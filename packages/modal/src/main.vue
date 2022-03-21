<template>
  <transition name="fade-vertical" appear>
    <div v-if="isShow" class="ct-bg-mask">
      <div class="ct-modal-wrapper">
        <div class="ct-modal-main">
          <div class="ct-modal-title">
            {{ title }}
          </div>
          <div class="ct-modal-content" :class="'ct-create__align-' + align">
            {{ content }}
          </div>
        </div>
        <div class="ct-modal-btns">
          <button class="ct-modal-confirm-btn" @click="clickHandler('confirm')">
            确定
          </button>
          <button class="ct-modal-cancel-btn" @click="clickHandler('cancel')">
            取消
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import "../../theme/modal.less";

export default {
  name: "ct-modal",
  data() {
    return {
      isShow: true,
      title: "标题",
      content: "这是一段自定义内容",
      align: "center",
      confirm: null,
      cancel: null,
    };
  },
  methods: {
    clickHandler(type) {
      this.isShow = false;
      if (type === "confirm") {
        typeof this.confirm === "function" && this.confirm();
      } else if (type === "cancel") {
        typeof this.cancel === "function" && this.cancel();
      }
    },
  },
};
</script>
