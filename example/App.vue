<template>
  <div>
    <ct-chatbox
      sent
      :text="['Hello']"
      name="Gypsophlia"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    ></ct-chatbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "123",
    };
  },
};
</script>
