<template>
  <div
    @mouseleave="select_box = !select_box ? select_box : !select_box"
    class="select"
  >
    <div
      @click="select_box = !select_box"
      class="select-box"
      v-bind:style="{
        border: '2px solid ' + color,
        backgroundColor: color + '10',
        color: color,
      }"
    >
      <div class="selected">{{ selected }}</div>
      <Icon
        icon="ep:arrow-down-bold"
        v-bind:class="[select_box ? 'icon-rotate' : 'icon']"
      />
    </div>
    <div
      v-bind:class="[!select_box ? 'options' : 'options-active']"
      v-bind:style="{
        border: select_box ? '2px solid ' + color : '2px solid ' + '#ffffff00',

        color: color,
        'border-right-width': '0px',
      }"
      ref="box"
    >
      <div class="option" v-for="option in options" :key="option.id">
        <input
          type="radio"
          name="option"
          :id="option.id"
          v-model="selected"
          :value="option.text"
        />
        <label :for="option.id">{{ option.text }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "SelectInput",
  props: {
    options: Array,
    color: {
      default: "#20BF6B",
    },
    width: {
      default: "100%",
    },
  },
  data: () => {
    return {
      selected: "Project A",
      select_box: false,
      //color: "#20BF6B",
      topOptions: "0px",
    };
  },
  components: {
    Icon,
  },
  watch: {
    select_box() {
      if (this.select_box) {
        let lengthOptions = this.options.length;
        if(lengthOptions == 4){ 
          this.topOptions = '64px';
        }else if(lengthOptions == 3){ 
          this.topOptions = '49px';
        }else if(lengthOptions == 2){ 
          this.topOptions = '34px';
        }else if(lengthOptions == 1){ 
          this.topOptions = '19px';
        }else{
          this.topOptions = '79px';
        }
        
      }else{
        this.topOptions = '0px';
      }
    },
  },
  methods: {
    
  },
};
</script>
<style scoped>
.select {
  width: v-bind("width");
  cursor: pointer;
  top: v-bind("topOptions");
  position: relative;
}

.select-box {
  height: 35px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  padding: 0px 10px;
  user-select: none;
  justify-content: space-between;
}
.options {
  display: none;
  margin-top: 1050px;
}

.options-active {
  display: block;
  border-radius: 10px;
  margin-top: 4px;
  opacity: 1;
  height: fit-content;
  max-height: 150px;
  overflow-y: scroll;
  background-color: #fff;
  scroll-behavior: smooth;
}

.icon-rotate {
  transform: rotate(180deg);
  transition: ease-in 350ms;
}
.icon {
  transform: rotate(0deg);
  transition: ease-in 350ms;
}

.option {
  height: 30px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  user-select: none;
  justify-content: space-between;
  cursor: pointer;
  background-color: v-bind("color+10");
}
.option > input {
  position: fixed;
  opacity: 0;
  pointer-events: none;
}

.option > label {
  width: 100%;
  cursor: pointer;
  padding: 10px 10px;
}
.option:hover {
  background-color: v-bind("color");
  color: #ffffff;
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: v-bind("color");
  border-radius: 0 8px 8px 0;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ffffff80;
  border-radius: 0 8px 8px 0;
}

/* Handle on hover 
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}*/
</style>