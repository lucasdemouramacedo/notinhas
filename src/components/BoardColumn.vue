<template>
    <div class="board">
        <card-board />
        <card-board />
        <card-board />
        <card-board />
        <card-board />
        <card-board />
        <card-board />
        <card-board />
    </div>
</template>

<script>
import CardBoard from './CardBoard.vue';
export default {
    name: 'BoardColumn',
    components: {
        CardBoard,
    }
}
</script>

<style scoped>
.board {
    width: 280px;
    height: 100%;
    padding: 0 15px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    
}
</style>