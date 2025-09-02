//不使用构建工具这里有点难启动
// import axios from './node_modules/axios/dist/axios.js'

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    //prompt 类似于alert，功能更多。Web api
    //localStorage Web api
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

//初始化代码，在第一次启动时工作
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

//匿名函数
myButton.onclick = function () {
    setUserName();
};

// let path = 'https://www.baidu.com'
// let data1 = axios.get(path)
// data.then().catch()

// //定义异步函数 async
// async function getData(url) {
//     //异步函数内部调用异步函数 await
//     let promise = await axios.get(url)
//     let data = promise.data
//     return data
// }

// //调用异步函数，Promise链
// getData(path)
//     .then(
//         data => console.log("data:", data)
//     ).catch(err=>{
//         console.log('err:',err)
//     })
