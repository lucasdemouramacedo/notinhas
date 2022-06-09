<template>
  <div class="boards">
    <board-column v-for="board in boards" :key="board.id" />
  </div>
</template>

<script>
import BoardColumn from "./BoardColumn.vue";
export default {
  data: () => {
    return {
      boards: [
        {
          id: 1,
          name: "BackLog",
        },
        {
          id: 2,
          name: "To Do",
        },
        {
          id: 3,
          name: "Doing",
        },
        {
          id: 4,
          name: "Review",
        },
      ],
      cards: [
        {
          id: 1,
          title: "Teste",
          list: 1
        },
      ],
    };
  },
  name: "BoardsColumns",
  components: {
    BoardColumn,
  },
  computed: {
      filterList () {
        return this.items.filter(item => item.list === 1)
      },
  }
};
</script>

<style scoped>
.boards {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  overflow-x: scroll;
}
</style>