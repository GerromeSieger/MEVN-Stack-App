import axios from 'axios'

export const UsersService = {
  http: axios.create({
    baseURL: 'http://victorifah.20.84.39.184.nip.io/api/users',
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
