<template>
  <transition name="modal-fade">
    <div v-if="isShow" class="ct-modal-wrapper">
      <p class="ct-modal-content">{{ content }}</p>
      <div class="ct-modal-btns">
        <button class="ct-modal-confirm-btn" @click="clickHandler('confirm')">
          确定
        </button>
        <button class="ct-modal-cancel-btn" @click="clickHandler('cancel')">
          取消
        </button>
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
      content: "",
      success: null,
    };
  },
  methods: {
    clickHandler(type) {
      this.isShow = false;
      if (type === "confirm") {
        typeof this.success === "function" && this.success();
      }
    },
  },
};
</script>
