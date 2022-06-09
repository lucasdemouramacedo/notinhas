<template>
  <div
    class="header"
    :style="{
      backgroundColor: this.$route.path != '/app' ? '#fff' : '#ffffff00',
      padding: this.$route.path != '/app' ? '15px 10%' : '15px 30px',
    }"
  >
    <div class="left">
      <img :src="logo" alt="Logo Notinhas" class="logo" />
      <h1 class="logo-title">Notinhas</h1>
    </div>
    <div class="right">
      <responsive-menu v-if="this.$route.path != '/app'"></responsive-menu>
        <div
          v-if="this.$route.path == '/app'"
          class="border-image"
          v-bind:style="{ border: '3px solid ' + color }"
        >
          <img :src="profile" class="profile-picture" />
        </div>
    </div>
  </div>
</template>

<script>
import ResponsiveMenu from "./ResponsiveMenu.vue";
export default {
  name: "HeaderNote",
  data: () => {
    return {
      color: "#20BF6B",
      logo: require("@/assets/logo.png"),
      profile: require("@/assets/profile-default.png"),
      menuStatus: false,
      windowWidth: window.innerWidth,
      menuList: [
        { component: "Home", route: "/" },
        { component: "Register", route: "/register" },
        { component: "Login", route: "/login" },
      ],
    };
  },
  watch: {
    windowWidth(newHeight, oldHeight) {
      console.log(`it changed to ${newHeight} from ${oldHeight}`);
    },
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  components: {
    ResponsiveMenu,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: fit-content;
  align-items: center;
}
.left {
  display: flex;
  align-items: center;
}

.logo {
  height: 30px;
  margin-right: 10px;
}

.logo-title {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 24px;
  font-weight: 600;
}

.border-image {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

.profile-picture {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
</style>