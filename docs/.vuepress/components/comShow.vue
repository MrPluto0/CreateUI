<template>
  <div class="container">
    <div class="topbar">
      <div
        class="show-btn btn"
        :class="activeIndex === 0 ? 'active' : ''"
        @click="activeIndex = 0"
      >
        展示
      </div>
      <div
        class="code-btn btn"
        :class="activeIndex === 1 ? 'active' : ''"
        @click="activeIndex = 1"
      >
        代码
      </div>
    </div>
    <transition name="fade-left">
      <div v-if="activeIndex === 0" class="content__show">
        <slot name="show"></slot>
      </div>
    </transition>
    <transition name="fade-right">
      <div v-if="activeIndex === 1" class="content__code">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "comShow",
  data() {
    return {
      activeIndex: 0,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 740px;
  margin: 20px 0;
  background: #f3f5f7;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  overflow: hidden;
}
.content__show {
  padding: 20px;
}
.content__code {
  margin: -20px 0;
}
.content__show,
.content__code {
  max-width: 740px;
  transition: all 0.5s ease;
}
.topbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  background: #eee;
}
.btn {
  font-weight: 600;
  cursor: pointer;
}
.btn.active {
  color: #5659e8;
}
.fade-left-enter,
.fade-left-leave-to {
  transform: translateX(-100%);
  height: 0;
}
.fade-right-enter,
.fade-right-leave-to {
  transform: translateX(100%);
  height: 0;
}
</style>
