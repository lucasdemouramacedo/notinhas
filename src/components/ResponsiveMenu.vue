<template>
  <div class="menu">
    <div
      class="rightBackground"
      :style="{
        display:
          menuStatus || (!menuStatus && windowWidth >= 768) ? 'block' : 'none',
      }"
    >
      <div
        class="right"
        :style="{
          display:
            menuStatus || (!menuStatus && windowWidth >= 768) ? 'flex' : 'none',
        }"
      >
        <ul>
          <li v-if="this.$route.path != '/app'">
            <router-link class="link" to="/">Home</router-link>
          </li>
          <li v-if="this.$route.path != '/app'">
            <router-link class="link" to="/register">Register</router-link>
          </li>
          <li v-if="this.$route.path != '/app'">
            <router-link class="link" to="/login">
              <custom-button customText="Login" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="menu-icon" @click="menuStatus = !menuStatus">
      <div :class="menuStatus ? 'menu-bar-close' : 'menu-bar'"></div>
      <div :class="menuStatus ? 'menu-bar-close' : 'menu-bar'"></div>
      <div :class="menuStatus ? 'menu-bar-close' : 'menu-bar'"></div>
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  name: "ResponsiveMenu",
  data: () => {
    return {
      menuStatus: false,
      windowWidth: window.innerWidth,
    };
  },
  components:{
      CustomButton
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

};
</script>

<style scoped>
.rightBackground {
  position: absolute;
  height: calc(100% - 60px);
  width: 100%;
  margin-top: 60px;
  top: 0;
  left: 0;
  background-color: v-bind("$store.state.primaryColor+50");
}

.right {
  background-color: #fff;
  width: 80%;
  margin: 20px 10% 0 10%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
}

.menu-icon {
  display: flex;
  width: 30px;
  height: 30px;
  flex-direction: column;
  align-items: flex-end;
}
.menu-bar,
.menu-bar-close {
  height: 5px;
  background-color: v-bind("$store.state.primaryColor");
  margin: 3px 0;
  border-radius: 5px;
  transition: 250ms ease-out;
}

.menu-bar:nth-child(1) {
  width: 100%;
}

.menu-bar:nth-child(2) {
  width: 75%;
}

.menu-bar:nth-child(3) {
  width: 100%;
}

.menu-bar-close:nth-child(1) {
  width: 100%;
  transform: rotate(45deg);
  position: relative;
  top: 11px;
}

.menu-bar-close:nth-child(2) {
  width: 0%;
  opacity: 0;
}

.menu-bar-close:nth-child(3) {
  width: 100%;
  transform: rotate(-45deg);
  position: relative;
  bottom: 9px;
}

.right ul {
  list-style: none;
  align-items: center;
}

.right ul li {
  margin-bottom: 15px;
}

.right ul li .link {
  color: v-bind("$store.state.primaryColor");
  font-weight: 500;
  text-decoration: none;
}

.right ul li:last-child {
  margin-bottom: 0;
}

@media only screen and (min-width: 768px) {
  .rightBackground {
    position: relative;
    height: fit-content;
    width: fit-content;
    margin: 0;
    background-color: #ffffff00;
  }

  .right {
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 0;
    padding: 0;
    background-color: #ffffff00;
  }

  .right ul {
    display: inline-flex;
    list-style: none;
    align-items: center;
  }

  .right ul {
    display: inline-flex;
    list-style: none;
    align-items: center;
  }

  .right ul li {
    margin-right: 20px;
    margin-bottom: 0;
  }

  .right ul li .link {
    color: v-bind("$store.state.primaryColor");
    font-weight: 500;
    text-decoration: none;
  }

  .right ul li:last-child {
    margin-right: 0;
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
  .menu-icon {
    display: none;
  }
}
</style>