<template>
  <div
    class="ct-chatbox"
    :class="sent ? 'ct-chatbox__left' : 'ct-chatbox__right'"
    :style="{ '--bg-color': bgColorCopy }"
  >
    <div class="ct-chatbox__outer">
      <div class="ct-chatbox__avatar" v-if="avatar">
        <img :src="avatar" alt="" />
      </div>
      <div class="ct-chatbox__inner">
        <div class="ct-chatbox__name" v-if="name">{{ name }}</div>
        <div
          class="ct-chatbox__main"
          :class="index === 0 ? 'ct-chatbox__first' : ''"
          v-for="(msg, index) in text"
          :key="index"
        >
          <div class="ct-chatbox__msg">{{ msg }}</div>
          <div
            class="ct-chatbox__stamp"
            v-if="stamp && index + 1 === text.length"
          >
            {{ stamp }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CtChatbox",
  props: {
    text: {
      type: Array,
    },
    sent: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: undefined,
    },
    avatar: {
      type: String,
      default: undefined,
    },
    stamp: {
      type: String,
      default: undefined,
    },
    bgColor: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      bgColorCopy: "",
    };
  },
  mounted() {
    this.bgColorCopy = this.bgColor;
    if (!this.bgColorCopy) {
      this.bgColorCopy = this.sent ? "#a8ddfa" : "#dde3e7";
    }
  },
};
</script>

<style lang="less" scoped>
.ct-chatbox {
  --bg-color: #dde3e7;
  display: flex;
}

.ct-chatbox__outer {
  display: flex;
  .ct-chatbox__avatar {
    img {
      max-width: 60px;
      border-radius: 50%;
    }
  }
}

.ct-chatbox__inner {
  .ct-chatbox__name {
    font-size: 12px;
    margin-bottom: 10px;
  }
  .ct-chatbox__main {
    position: relative;
    border-radius: 5px;
    padding: 10px;
    background-color: var(--bg-color);
    .ct-chatbox__stamp {
      margin-top: 10px;
      font-size: 12px;
    }
    &:not(&:last-of-type) {
      margin-bottom: 10px;
    }
  }
}

.ct-chatbox__left {
  .ct-chatbox__outer {
    .ct-chatbox__avatar {
      margin-right: 15px;
    }
  }
  .ct-chatbox__first::before {
    content: "";
    position: absolute;
    left: -20px;
    border: 10px solid var(--bg-color);
    border-left-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
  }
}

.ct-chatbox__right {
  flex-direction: row-reverse;
  .ct-chatbox__outer {
    flex-direction: row-reverse;
    .ct-chatbox__avatar {
      margin-left: 15px;
    }
  }
  .ct-chatbox__first::after {
    content: "";
    position: absolute;
    top: 15px;
    right: -20px;
    border: 10px solid var(--bg-color);
    border-right-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
  }
}
</style>
