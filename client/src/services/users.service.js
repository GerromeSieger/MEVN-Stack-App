import axios from 'axios'

export const UsersService = {
  http: axios.create({
    baseURL: 'http://192.168.56.118:3000/api/users',
  }),
  get() {
    return this.http.get()
  },
  post(userData) {
    return this.http.post('', userData)
  },
  put(id, userData) {
    return this.http.put(`/${id}`, userData)
  },
  delete(id) {
    return this.http.delete(`/${id}`)
  },
}
