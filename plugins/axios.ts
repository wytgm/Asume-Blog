import axios from 'axios'

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: '',
    timeout: 10000,
    withCredentials: true, // 允许携带cookie
  })

  return {
    provide: {
      axios: instance,
    },
  }
})