import axios from 'axios'
import { QueryClient } from 'react-query'
import { restoreItem } from 'src/services/storage'

export const api = axios.create({
  baseURL: 'https://api.bookclub.mapadaprogramacao.com.br',
  headers: {
    Authorization: `Bearer ${restoreItem('@bookclub_token')}}`
  }
})

export const queryClient = new QueryClient()
