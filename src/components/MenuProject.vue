<template>
  <div class="menu">
    <div class="left">
      <select-input :options="options" width="40%"/>
       <custom-button style="margin-left: 10px" icon="fluent:add-12-filled" alt="Integrantes" />
    </div>
    <div class="right">
      <custom-button style="margin-right: 10px" icon="fa-solid:users" alt="Integrantes" />
      <custom-button customText="Add Board" icon="fluent:add-12-filled" alt="Adicionar Board" />
    </div>
  </div>
</template>

<script>
import SelectInput from "./SelectInput.vue";
import CustomButton from "./CustomButton.vue"
export default {
  name: "MenuProject",
  data: () => {
    return {
      options: [
        { id: 1, text: "Project A", value: "A" },
        { id: 2, text: "Project B", value: "B" },
        { id: 3, text: "Project C", value: "C" },
        { id: 4, text: "Project D", value: "D" },
        { id: 5, text: "Project E", value: "E" },
        { id: 6, text: "Project F", value: "F" },
        { id: 7, text: "Project G", value: "G" },
        { id: 8, text: "Project H", value: "H" },
        { id: 9, text: "Project I", value: "I" },
        { id: 10, text: "Project J", value: "J" },
      ],
      color: "#20BF6B",
    };
  },
  components: {
    SelectInput,
    CustomButton,
  },
};
</script>

<style scoped>
.menu{
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 0px 25px 0px v-bind("color+20");
    border-radius: 10px;
    margin: 20px 0;
    margin: 0px 30px 15px 30px;
    padding: 0 15px;
    height: 60px;
}
.left{
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.right{
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>