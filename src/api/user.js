import server from '../utils/request'

const userAPI = {
  getAllUsers() {
    return server({
      url: '/user/list',
      method: 'get'
    })
  },
  getUserByAccount(account) {
    return server({
      url: `/user/${account}`,
      method: 'get'
    })
  },
  deleteUserById(id) {
    return server({
      url: `/user/${id}`,
      method: 'delete'
    })
  },
  registerUser(loginData) {
    return server({
      url: '/user/new',
      method: 'post',
      data: loginData
    })
  },
  updateUser(userDTO) {
    return server({
      url: '/user/updateuser',
      method: 'put',
      data: userDTO
    })
  },
  updatePassword(passwordData) {
    return server({
      url: '/user/updatePassword',
      method: 'post',
      data: passwordData
    })
  }
}

export default userAPI