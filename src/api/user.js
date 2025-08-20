// src/api/user.js
import request from '@/utils/request'

// 用户相关 API
export const userAPI = {
  // 查询所有用户
  getAllUsers() {
    return request({
      url: '/user/list',
      method: 'get'
    })
  },

  // 根据账号查询用户
  getUserByAccount(account) {
    return request({
      url: `/user/${account}`,
      method: 'get'
    })
  },

  // 删除用户
  deleteUserById(id) {
    return request({
      url: `/user/${id}`,
      method: 'delete'
    })
  },

  // 注册用户
  registerUser(loginData) {
    return request({
      url: '/user/new',
      method: 'post',
      data: loginData
    })
  },

  // 更新用户信息
  updateUser(userDTO) {
    return request({
      url: '/user/updateuser',
      method: 'put',
      data: userDTO
    })
  },

  // 修改密码
  updatePassword(passwordData) {
    return request({
      url: '/user/updatePassword',
      method: 'post',
      data: passwordData
    })
  }
}