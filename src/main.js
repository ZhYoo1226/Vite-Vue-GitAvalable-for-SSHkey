import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import userAPI from './api/user'

createApp(App).use(router, ElementPlus).mount('#app')

// if (import.meta.env.VITE_BASE_URL) {
//     console.log('你找到了你想要的环境变量')
// } else {
//     console.log('你还没找到呢')
// }

// console.log('-------------------------------------------------------')

// let user_list = userAPI.getAllUsers()
// user_list.then(data => {
//     // console.log("用户列表：", data)
// }).catch(error => {
//     // console.log("业务代码调用错误如下：", error)
// })

// let O = {
//     name: '名',
//     major: {
//         upper: '计算机科学与技术',
//         inner: '软件工程'
//     }
// }

// let OO = Object.create(O)
// console.log(OO)
// console.log(O);

// console.log('-------------------------------------------------------')

// let a = {
//     __proto__: Object.getPrototypeOf(OO)
// }
// console.log('a对象的原型被设定为OO对象', a)

// console.log('-------------------------------------------------------')

// let func = function (n) {
//     this.name = n
// }

// console.log("构造函数的原型：", func.prototype)
// // 发现函数原型的constructor会呈现递归相同的现象
// // 只是浏览器故意的写法，用于理解
// // 实际上从第一次constructor的原型就是Object.Prototype

// console.log('-------------------------------------------------------')

// class Lei {
//     constructor(abc) {
//         this.name = abc
//     }

//     getName() {
//         console.log(this.name)
//     }
// }

// let lei = new Lei("zy")
// lei.getName()
// console.log("看看类原型", Lei.prototype)
// console.log('你看看类的实例对象：', lei)

// console.log('-------------------------------------------------------')

// // 剩余参数
// function look (a, b, ...arrays) {
//     console.log(a)
//     console.log(b)
//     // 扩展运算符只能在参数（函数）和字面量中使用（对象，数组）
//     const jiegou = [...arrays]
//     console.log(jiegou)
// }

// look(1,0,2,4,3)
