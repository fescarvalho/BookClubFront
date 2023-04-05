import { api } from 'src/services/api'

export const registerCall = (date) => api.post('/user', date)
