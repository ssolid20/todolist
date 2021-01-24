<template>
  <div class="home" >
    <div class="navbar-fixed">
        <nav class="blue center ">
            <div class="flow-text">
            Things to do {{listOfTodos.length}}
            </div>
        </nav>
    </div>
  <div class="container" >
  <div class="row" >

  <div v-for="(x,id) in listOfTodos" :key="id">
    <div class=" col s12 m6 l4">
    <div class="card small hoverable">
      <div class="card-content ">
        <span class="card-title">{{x.title}}</span>
            <p class="test">{{x.content}}</p>
      </div>
        <div class="card-action">
            
            <a class=" blue  btn-floating modal-trigger" href="#modal1" @click='test200([x.title,x.content])'>
              <i class="far fa-eye"></i></a>
          <!--<a href='#' class="blue btn-floating " v-on:click="test3([x.id,x.title,x.content])" >
            <i class="far fa-eye"></i>
          </a>-->
          <a href="#" class="btn-floating  test2 right " v-on:click="test(x.id)">
            <i class="far fa-check-circle"></i>
          </a>
          <a href="#" class="btn-floating red test2 right  " v-on:click="test2([x.id,x.title,x.content])">
            <i class="far fa-edit"></i>
          </a>
        </div>

    </div>
  </div>
 
</div>

  </div>
  </div>

    <div class="container">
    <div class="fixed-action-btn ">
      <router-link to='addtodo' class="btn-floating waves-effect waves-light btn-large hoverable blue">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
    </div>


  <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>{{testList[0]}}</h4>
      <p>{{testList[1]}}</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close white-text blue btn-flat">Close</a>
    </div>
  </div>
  </div>
</template>

<script>
import db from '@/firebase'
import M from 'materialize-css'
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      listOfTodos:[],
      testList:[]
    }
  },
  
  created(){

            $(document).ready(function(){
        $('.modal').modal();
  });
  /*db.collection('todolist').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let smoothie = doc.data()
          smoothie.id = doc.id
          this.listOfTodos.push(smoothie)
        })
      })*/
  let ref = db.collection('todolist');

  ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                let doc = change.doc
                this.listOfTodos.push({
                id: doc.id,
                content: doc.data().content,
                title: doc.data().title,
                })
                }
        })
        })

  },
  methods:{
    test(x) {
        let list = this.listOfTodos;
        let v  = list.filter(y => y.id == x);
        console.log(v)
        db.collection('todolist').doc(x).delete()
       .then(() => {
        this.listOfTodos = this.listOfTodos.filter(smoothie => {
          return smoothie.id != x
        })
      }).then(()=>{

        M.toast({html: `Todo '${v[0].title}' was completed/deleted`,classes: 'white black-text'})
      }).catch(err => {
        console.log(err)
      })

    },
    test2(f){
      this.$router.push({ name : 'edit', params: { todoid: f } })

    },
    test3(c){
      this.$router.push({ name : 'look', params: { info: c } })

    },
    test200(x){
      this.testList = x;
    /*      var elems = document.querySelectorAll('.modal');

      var instance = M.Modal.getInstance(elems);
      instance.open();*/

    }

  }
}
</script>
<style scoped>
.test{
  text-overflow: ellipsis;
  overflow: hidden;
white-space: nowrap;
}
.small{
  height: 200px;
}
.test2{
margin-left: 5px;

}
</style>