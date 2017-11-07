import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Portfolio from '@/components/Portafolio'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Articles from '@/components/Articles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/portfolio',
      name:'Portfolio',
      component: Portfolio
    },
    {
      path:'/skills',
      name:'Skills',
      component: Skills
    },
    {
      path:'/education',
      name:'education',
      component: Education
    },
    {
      path:'/articles',
      name:'articles',
      component: Articles
    },
  ]
})
