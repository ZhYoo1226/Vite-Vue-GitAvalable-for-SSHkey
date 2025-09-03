import axios from 'axios'

const server = axios.create(
  baseURL = 'https://localhost:5500/api',
  timeout = 1000,
  headers = {

  }
)

const E = {
  "5":" 服务端问题 ",
  "4":" 客户端问题 ",
  "3":" 资源重定向 ",
  "2":" 成功取资源 "
}

server.interceptors.request.use(
  request => {
    const token = localStorage.getItem('token')
    if(token) {
      request.headers.Authorization = token
    }
    return request
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

server.interceptors.response.use(
  response => {
    let status = response.status.toString().charAt(0)
    console.log("状态码映射信息：",E[status])
    return response.data
  },
  error => {
    console.log("error对象",error)
    return Promise.reject(error)
  }
)