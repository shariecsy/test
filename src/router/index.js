import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Feature from '@/components/feature'
import HelloWorld from '@/components/HelloWorld';
import Test from '@/components/Test';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/feature',
      name:'Feature',
      components:Feature
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
