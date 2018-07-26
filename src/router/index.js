import Vue from 'vue'
import Router from 'vue-router'
import logIn from '@/components/logIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'logIn',
      component: logIn
    }
  ]
})
