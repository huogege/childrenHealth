import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import GravidaQurry from '@/components/gravidaQurry/index'
import MessageList from '@/components/messageList/index'
import MessageDetail from '@/components/messageDetail/index'
import QurryResult from '@/components/qurryResult/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/GravidaQurry',
      name: 'GravidaQurry',
      component: GravidaQurry
    },
    {
        path: '/MessageList',
        name: 'MessageList',
        component: MessageList
    },
    {
        path: '/MessageDetail',
        name: 'MessageDetail',
        component: MessageDetail
    },
    {
        path: '/QurryResult',
        name: 'QurryResult',
        component: QurryResult
    },
  ]
})
