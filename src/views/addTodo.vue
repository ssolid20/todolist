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
            <textarea id="message" class="materialize-textarea"  v-model='message'  ></textarea>
            <label for="message">Your Message</label>
          </div>
          <div class="input-field ">
            <i class="material-icons prefix">event</i>
            <input type="date" id="data" v-model='data' autocomplete="off">
            <label for="data">Choose Date</label>
          </div>
          <div class="input-field ">
            <i class="material-icons prefix">alarm</i>
            <input type="time" id="time" v-model='time' autocomplete="off">
            <label for="time">Choose Time</label>
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
import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;

export default {
    data(){
      return {
        title:'',
        message:'',
        x:null,
        time:'',
        data:'',
      }
    },
    created(){
      
     
          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems,{
              parse:true
            });
          });
            document.addEventListener('DOMContentLoaded', function() {
              var elems = document.querySelectorAll('.timepicker');
              var instances = M.Timepicker.init(elems);
            });
    },
    mounted(){

        let f = document.querySelector('#email');
        let r = document.querySelector('#message');
        f.focus();


    },
    methods:{
      async send(){
        console.log(this.data,this.time,this.time.substring(0,2))
        console.log(new Date(`${this.data} ${this.time}`))

        db.collection('todolist').add({
                title: this.title.toString(),
                content:this.message,
            }).then(()=> 
              M.toast({html: `Todo '${this.title}' was added`,classes: 'white black-text'})
            ).catch(err =>{
                console.log(err)
            })

         // this.$router.push('/')

    const notifs = await LocalNotifications.schedule({
        notifications: [
          {
            title: this.title,
            body: this.message,
            id: 1,
            schedule: { at: new Date(`${this.data} ${this.time}`)/*,on:{hour:Number(this.time.substring(0,2))}*/ },
            sound: "beep.wav",
            attachments: null,
            actionTypeId: "",
            extra: null
          }
        ]
      });
      console.log('scheduled notifications', notifs);
    },
      async test(){
        const notifs = await LocalNotifications.cancel(
          {
        notifications: [
          {
            title: this.title,
            body: this.message,
            id: 1,
            schedule: { at: new Date(`${this.data} ${this.time}`)/*,on:{hour:Number(this.time.substring(0,2))}*/ },
            sound: "beep.wav",
            attachments: null,
            actionTypeId: "",
            extra: null
          }
        ]
      }
        )
              console.log('scheduled notifications', notifs);

    }
    }
}
</script>

<style scoped>

</style>