import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import ShowProcessBar from '@/components/ShowProcessBar'
import ShowTab from '@/components/ShowTab'
import ShowFlexBox from '@/components/ShowFlexBox'
import ShowBoxGrid from '@/components/ShowBoxGrid'
import Showcheader from '@/components/Showheader'
import ShowCbox from '@/components/ShowCbox'
import ShowCtable from '@/components/ShowTable'
import ShowTips from '@/components/ShowTips'
import ShowCbutton from '@/components/ShowCbutton'
import ShowCswitch from '@/components/ShowCswitch'
import ShowGroup from '@/components/ShowGroup'
// import ShowCard from '@/components/ShowCard'
import ShowDialog from '@/components/ShowDialog'


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
      component: ShowTab
    },
    {
      path: '/flexbox',
      name: 'flexbox',
      component: ShowFlexBox
    },
    {
      path: '/boxgrid',
      name: 'box-grid',
      component: ShowBoxGrid
    },
    {
      path: '/header',
      name: 'header',
      component: Showcheader
    },
    {
      path: '/cbox',
      name: 'cbox',
      component: ShowCbox
    },
    {
      path: '/table',
      name: 'ctable',
      component: ShowCtable
    },
    {
      path: '/tips',
      name: 'tips',
      component: ShowTips
    },
    {
      path: '/button',
      name: 'button',
      component: ShowCbutton
    },
    {
      path: '/switch',
      name: 'switch',
      component: ShowCswitch
    },
    {
      path: '/group',
      name: 'group',
      component: ShowGroup
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: ShowDialog
    }
  ]
})
