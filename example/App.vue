<template>
  <div style="background-color: #efefef">
    <ct-chatbox
      sent
      :text="['Hello', '1123', '123']"
      name="Gypsophlia"
      avatar="https://avatars.githubusercontent.com/u/54534553?v=4"
    ></ct-chatbox>
    <div
      style="height: 200px; width: 200px; background-color: skyblue"
      v-loading="loading"
    ></div>
    <ct-musicbox
      name="你的月亮"
      src="./assets/gypsophila.mp3"
      v-model="isPlay"
      refer="audioxx"
      ref="musicbox"
      autoplay
    ></ct-musicbox>
    <button @click="toastTest">toast测试</button>
    <button @click="modalTest">modal测试</button>
    <button @click="loadingTest">loading测试</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "123",
      loading: false,
      isPlay: false,
      musicbox: null,
    };
  },
  mounted() {
    this.musicbox = this.$refs["musicbox"];
    let an = this.musicbox.getAudioAnalyser();
    console.log(an);
  },
  methods: {
    toastTest() {
      this.$toast.info("OK");
      this.$toast.warning("Attention");
      this.$toast.error("NO");
      this.$toast({
        content: "successOK",
        type: "success",
        duration: 2000,
      });
    },
    modalTest() {
      this.$modal({
        content: "阿八八八八八嗷嗷",
        align: "indent",
        success: () => {
          alert("OK");
        },
      });
    },
    loadingTest() {
      this.loading = !this.loading;
    },
  },
};
</script>
