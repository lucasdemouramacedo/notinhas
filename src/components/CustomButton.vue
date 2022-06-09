<template>
    <button
    :style="{
        width: icon && !customText ? '40px' : 'fit-content',
        padding: icon && !customText ? '0' : '0 30px'
        }"

    :alt="alt"
    >
      <Icon v-if="icon" class="icon" :icon="icon"
      :style="{
        paddingRight: icon && !customText ? '0' : '10px'
        }"/>
      {{ customText }}
    </button>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "CustomButton",
  props: {
    color: {
      default: "#20BF6B",
    },
    customText: {
        type: String,
    },
    icon:{
        type: String,
    },
    alt:{
        type: String,
    },
  },
   components: {
    Icon,
  },
};
</script>

<style scoped>
button{
    background: v-bind("$store.state.primaryColor");
    border-radius: 13px;
    height: 40px;
    border: 0px;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    overflow: hidden;
}

button:active{
  padding: 0;
  margin: 0;
  opacity: 0.9;
  transition: 250ms
}
</style>