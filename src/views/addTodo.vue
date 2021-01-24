<template>
<div>
    <div class="navbar-fixed">
        <nav class="blue center ">
            <div class="flow-text">
              Add Todo
            </div>
        </nav>
    </div>
    <div class="container">

        <form v-on:submit='send'>
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
          <a class="btn hoverable waves-effect waves-light right" v-on:click="send">
            Add Todo
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
        title:'',
        message:'',
        x:null
      }
    },
    mounted(){

        let f = document.querySelector('#email');
        let r = document.querySelector('#message');
        f.focus();


    },
    methods:{
      send(){

        db.collection('todolist').add({
                title: this.title.toString(),
                content:this.message,
            }).then(()=> 
              M.toast({html: `Todo '${this.title}' was added`,classes: 'white black-text'})
            ).catch(err =>{
                console.log(err)
            })

          this.$router.push('/');


      }
    }
}
</script>

<style scoped>

</style>