import { api } from 'src/services/api'
export const searchQuery = (query) =>
  api.get(`/search?name=${query}`, {
    headers: {
      Authorization: `beares ${localStorage.getItem('@bookclub_token')}`
    }
  })
