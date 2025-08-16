import { createMemoryHistory, createRouter } from 'vue-router'

import loginview from '../views/Login/LoginView.vue'
import log from '../views/Login/log.vue'
import reg from '../views/Login/reg.vue'

const routes = [
    { path: '/log', component: log },
    { path: "/reg", component: reg },
    { path: '/:id', component: loginview },

]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router