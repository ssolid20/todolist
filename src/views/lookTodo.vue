<template>
<div>
    <div class="navbar-fixed">
        <nav class="blue center ">
            <div class="flow-text">
              Read Todo
            </div>
        </nav>
    </div>
    <div class="container">

        <div class="row">
            <div class="col s12 m12 l12">
            <div class="card hoverable large">
                <div class="card-content ">
                    <span class="card-title">{{title}}</span>
                    <div class="">
                     <p class="">  {{message}}</p>
                    </div>
                    
                </div>
                <div class="card-action">

                  
                    <a href="#" class="btn-floating red test2 left waves-effect waves-light  " v-on:click="test2([todoId,title,message])">
                        <i class="far fa-edit"></i>
                    </a>

                </div>
            </div>
            </div>
        </div>
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

export default {
    data(){
      return {
        title:this.$route.params.info[1],
        message:this.$route.params.info[2],
        todoId:this.$route.params.info[0],

      }
    },

    methods:{

    test2(f){
      this.$router.push({ name : 'edit', params: { todoid: f } })

    },

    }
}
</script>

<style>
.test{
  margin-right: 5%;
}

</style>