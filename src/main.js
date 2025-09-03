import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import axios from 'axios'
import userAPI from './api/user'

createApp(App).use(router, ElementPlus).mount('#app')

if (import.meta.env.VITE_BASE_URL) {
    console.log('你找到了你想要的环境变量')
} else {
    console.log('你还没找到呢')
}

let user_list = userAPI.getAllUsers()
user_list.then(data => {
    console.log("用户列表：", data)
}).catch(error => {
    console.log("业务代码调用错误如下：", error)
})
