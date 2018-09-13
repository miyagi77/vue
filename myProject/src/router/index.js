import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/components/main'
import title1 from '@/components/title1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/main',
      name: 'main',
      component: main
    },{
      path: '/title1',
      name: 'title1',
      component: title1
    }
  ]
})
