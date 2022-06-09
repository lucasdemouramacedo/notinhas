<template>
    <div class="home">
        <header-note />
        <img class="home-image" :src="homeImage" alt="">
        <div class="card-start">
          <h1>Organize sua vida!</h1>
          <p>Organize tudo o que você quiser, desde seus estudos, trablhados, até tarefas cotidianas.</p>
        </div>
    </div>
</template>


<script>
import HeaderNote from '../components/HeaderNote.vue';
export default {
    name: 'HomePage',
    data: () => {
      return {
        homeImage: require('@/assets/home-image.png')
      };
    },
    components: {
    HeaderNote,
  }
}
</script>

<style scoped>
.home-image{
  width: 100%;
}
.card-start{
  text-align: center;
}
.card-start > h1{
  font-size: 36px;
  font-weight: 800;
  padding: 10px 20px;
  color: v-bind("$store.state.primaryColor");
}
.card-start > p{
  font-size: 18px;
  font-weight: 500;
  padding: 5px 25px;
  color: #6D6D6D;
}
</style>