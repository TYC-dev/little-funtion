import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import ShowProcessBar from '@/components/ShowProcessBar'
import ShowTab from '@/components/ShowTab'
import ShowFlexBox from '@/components/ShowFlexBox'
import ShowBoxGrid from '@/components/ShowBoxGrid'

import TabBlock1 from '@/components/ShowTabBlock1'
import TabBlock2 from '@/components/ShowTabBlock2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/process-bar',
      name: 'Process-bar',
      component: ShowProcessBar
    },
    {
      path: '/tab',
      name: 'tab',
      component: ShowTab,
      children:[{
        path: '',
        component: TabBlock1
      },{
        path: 'tabblock1',
        component: TabBlock1
      },{
        path: 'tabblock2',
        component: TabBlock2
      }]
    },
    {
      path: '/flexbox',
      component: ShowFlexBox
    },
    {
      path: '/boxgrid',
      component: ShowBoxGrid
    }
  ]
})
