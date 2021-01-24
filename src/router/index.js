import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import editTodo from '../views/editTodo.vue'
import lookTodo from '../views/lookTodo.vue'
import addTodo from '../views/addTodo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/addtodo',
    name : 'TODO',
    component: addTodo
  },
  {
    path:'/edittodo/:todoid',
    name : 'edit',
    component: editTodo
  },
  {
    path:'/looktodo/:info',
    name : 'look',
    component: lookTodo
  }
]

const router = new VueRouter({

  routes
})

export default router
