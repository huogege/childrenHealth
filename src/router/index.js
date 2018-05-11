import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import GravidaQurry from '@/components/gravidaQurry/index'
import MessageList from '@/components/messageList/index'
import MessageDetail from '@/components/messageDetail/index'
import QurryResult from '@/components/qurryResult/index'
import QurryResultChild from '@/components/qurryResultChild/index'
import VisitResult from '@/components/visitResult/index'
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
    {
        path: '/VisitResult',
        name: 'VisitResult',
        component: VisitResult
    },
    {
        path: '/QurryResultChild',
        name: 'QurryResultChild',
        component: QurryResultChild
    },
  ]
})
