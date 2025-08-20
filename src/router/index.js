import { createWebHistory, createRouter } from 'vue-router'

import loginpage from '@Login/LoginPage.vue'
import logform from '@business/logform.vue'
import regform from '@business/regform.vue'
import loginview from '@business/loginview.vue'

const routes = [
    {
        name: '',
        path: '/',
        redirect: '/loginpage' //重定向
    },
    {
        name: 'loginpage',
        path: '/loginpage',
        component: loginpage,
        children:[
            {path:'',redirect:'/loginview'}
        ]
    },
    {
        name: 'loginview',
        path: '/loginview',
        component: loginview,
        children: [
            { name: 'logform', path: 'logform', component: logform },
            { name: 'regform', path: 'regform', component: regform }
        ]
    }

]

const router = createRouter({
    //路由器的工作模式
    //hash模式，createWebHashHistory
    //history模式,createWebHistory
    //memory模式,createMemoryHistory
    history: createWebHistory(),
    routes,
})

export default router