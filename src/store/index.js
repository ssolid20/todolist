import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todo:[
      {title:'Cooking',
      content:'You should prepare pasta for dinner today',
      id:Math.random()
    },
      {title:'Organize parties',
      content:'Buy this,this, and..', id:Math.random()},
      {title:'Buy gift for xmas',
      content:'Dont forget mom , gradmom ecc and other relaives', id:Math.random()},
      {title:'projects to finish',
      content:'java, c++ , electronics , holografic watch ', id:Math.random()},
    ],
    count:0
  },
  mutations: {
    test(state,x) {
      let r = state.todo;
      let r1 = r.filter(y=> y.id == x)

      state.todo= state.todo.filter(y => y.id !=x)
      console.log(state.todo)
      console.log(r1)
     M.toast({html: `Todo '${r1[0].title}' was completed/deleted`,classes: 'white black-text'})
    },
    test2(state,f){
      state.todo= state.todo.filter(y => y.id !=f)

    },
    test3(state,h){
      state.count = h;
      console.log(state.count)

    }
  },
  actions: {
  },
  modules: {
  }
})
