<template>
  <div>
    <ct-chatbox :text="[text]" sent></ct-chatbox>
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
