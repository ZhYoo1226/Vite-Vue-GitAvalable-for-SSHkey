import { createWebHistory, createRouter } from 'vue-router'

import loginpage from '../views/Login/LoginPage.vue'
import logform from '@business/logform.vue'
import regform from '@business/regform.vue'
import loginview from '@business/loginview.vue'

const routes = [
    {
        name: 'loginpage',
        path: '/',
        component: loginpage,
        children: [
            {
                name: 'loginview',
                path: 'loginview',
                component: loginview,
                children: [
                    { name: 'logform', path: 'logform', component: logform },
                    { name: 'regform', path: 'regform', component: regform }
                ]
            },
        ]
    }
]

const router = createRouter({
    //hash模式，createWebHashHistory
    //history模式,createWebHistory
    //memory模式,createMemoryHistory
    history: createWebHistory(),
    routes,
})

export default router