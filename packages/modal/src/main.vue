<template>
  <transition name="modal-fade">
    <div v-if="isShow" class="modal-wrapper">
      <p>{{ content }}</p>
      <div class="btns">
        <button class="confirm-btn" @click="clickHandler('confirm')">
          确定
        </button>
        <button class="cancel-btn" @click="clickHandler('cancel')">取消</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ct-modal",
  data() {
    return {
      isShow: true,
      content: "",
      success: null,
      fail: null,
    };
  },
  methods: {
    clickHandler(type) {
      let res = { confirm: false };
      if (type == "confirm") res.confirm = true;
      if (typeof this.success === "function") {
        this.success(res);
      }
      this.isShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.modal-wrapper {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  min-height: 150px;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  overflow: hidden;

  p {
    margin: 30px;
    text-align: center;
  }

  .btns {
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 0;

    button {
      width: 50%;
      border-radius: 0;
      outline: none;
      border: none;
      border-top: 1px solid silver;
      padding: 5px 0;

      &:active {
        transform: scale(0.98);
      }
    }

    .confirm-btn {
      color: rgb(54, 151, 253);
      border-right: 1px solid silver;
    }

    .cancel-btn {
      color: #f56c6c;
    }
  }
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
  // transform: translateX(-50%) translateY(-100%);
}
</style>
