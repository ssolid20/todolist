<template>
  <div >
      <router-view/>

  </div>
</template>



<script>
import M from 'materialize-css'
import Home from '@/views/Home.vue'
import editTodo from '@/views/editTodo.vue'
import NAV from '@/views/nav.vue'
import addTodo from '@/views/addTodo.vue'

export default {
  components:{
    Home,
    NAV,
    addTodo,
    editTodo
  }
}
</script>

<style>

</style>

