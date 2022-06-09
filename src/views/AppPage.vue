<template>
  <header-note />
  <main>
     <menu-project />
     <boards-columns />
  </main>
 
  <!--<column-cards title="Para fazer"/>-->
</template>

<script>
import HeaderNote from '../components/HeaderNote.vue';
import MenuProject from '../components/MenuProject.vue';
import BoardsColumns from '../components/BoardsColumns.vue'

export default {
  name: 'AppPage',
  components: {
    HeaderNote,
    MenuProject,
    BoardsColumns
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

*{
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
}
main{
  height: calc(100% - 146px);
}
</style>
