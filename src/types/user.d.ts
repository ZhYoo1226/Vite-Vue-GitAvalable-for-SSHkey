// src/types/user.js

// 用户信息类型
export interface User {
  id?: number
  username?: string
  account: string
  password: string
  email?: string
  phone?: string
  // 根据你的实际 User 类添加其他字段
}

// 登录信息类型
export interface Login {
  account: string
  password: string
}

// 用户 DTO 类型
export interface UserDTO {
  id: number
  username?: string
  account?: string
  email?: string
  phone?: string
  // 根据你的实际 UserDTO 类添加其他字段
}

// 密码修改类型
export interface Password {
  accountId: string
  oldPassword: string
  newPassword: string
}

// API 响应结果类型
export interface Result<T> {
  code: number
  message: string
  data?: T
}