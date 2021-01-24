<template>
<div>
      <div class="navbar-fixed">
        <nav class="blue center ">
            <div class="flow-text">
            Edit Todo
            </div>
        </nav>
    </div>
    <div class="container">
        <form v-on:submit='edit'>
          <div class="input-field ">
            <i class="material-icons prefix">title</i>
            <input type="text" id="email" v-model='title' autocomplete="off">
            <label for="email">Your Title</label>
          </div>
          <div class="input-field">
            <i class="material-icons prefix">message</i>
            <textarea id="message" class="materialize-textarea"  v-model='message'></textarea>
            <label for="message">Your Message</label>
          </div>
          <a class="btn hoverable waves-effect waves-light right" v-on:click="edit">
            Edit Todo
          </a>
        </form>
    </div>
        <div class="container">
        <div class="fixed-action-btn">
          <router-link to='/' class="btn-floating waves-effect waves-light btn-large hoverable blue">
            <i class="large material-icons">keyboard_backspace</i>
          </router-link>
        </div>
        </div>
</div>
</template>

<script>
import db from '@/firebase'

export default {
    data(){
      return {
        title:this.$route.params.todoid[1],
        message:this.$route.params.todoid[2],
        todoId:this.$route.params.todoid[0],

      }
    },
    mounted(){
        let f = document.querySelector('#email');
        let r = document.querySelector('#message');
        f.focus();
        r.focus()

    },
    methods:{
      edit(){

         db.collection('todolist').doc(this.todoId).update({
            title: this.title,
            content: this.message,
          }).then(() => {
            M.toast({html: `Todo '${this.title}' was edited`,classes: 'white black-text'})
            this.$router.push('/')
          }).catch(err => {
            console.log(err)
          })
      }
    },

}
</script>

<style scoped>
.test{
  text-overflow: ellipsis;
  overflow: hidden;
white-space: nowrap;
}
</style>