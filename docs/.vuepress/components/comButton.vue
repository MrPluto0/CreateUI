<template>
  <div class="ct-button-wrapper">
    <button class="ct-button" @click="clickTransfer"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: "comButton",
  methods: {
    clickTransfer() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="stylus" scoped>
.ct-button
  border-radius: 5px
  border: 2px solid $accentColor
  padding: 5px 10px
  color: $textColor
  &:hover
    background-color: lighten($accentColor,20%)
    color: white
  &:active
    transform: scale(0.98)
</style>
