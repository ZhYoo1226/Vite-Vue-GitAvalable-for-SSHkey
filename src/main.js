import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import axios from 'axios'

createApp(App).use(router,ElementPlus).mount('#app')

if(import.meta.env.VITE_BASE_URL){
    console.log('你找到了你想要的环境变量')
}else{
    console.log('你还没找到呢')
}

fetch('/api360').then((data)=>{
    console.log("360接口代理测试：",data)
}).catch((err)=>{
    console.log(err)
})

//浏览器拼接本网址和路径，给到vite服务器发现目录里没有
//此时就会重定向到index.html
fetch('/apibd').then((data)=>{
    console.log("百度接口代理测试：",data)
}).catch((err)=>{
    console.log(err)
})

let path = '/apibd'
//定义异步函数 async
async function getData(url) {
    //异步函数内部调用异步函数 await
    let promise = await axios.get(url)
    let data = promise.data
    return data
}

//调用异步函数，Promise链
getData(path)
    .then(
        data => console.log("data:", data)
    ).catch(err=>{
        console.log('err:',err)
    })