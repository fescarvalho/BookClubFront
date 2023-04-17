import { api } from 'src/services/api'
export const getFavorites = (data) =>
  api.get('/userbook', {
    headers: {
      Authorization: `beares ${localStorage.getItem('@bookclub_token')}`
    }
  })
export const addBookToFavorite = (data) =>
  api.post('/userbook', data, {
    headers: {
      Authorization: `beares ${localStorage.getItem('@bookclub_token')}`
    }
  })
export const deleteBookFromFavorite = (id) =>
  api.delete(`/userbook/${id}`, {
    headers: {
      Authorization: `beares ${localStorage.getItem('@bookclub_token')}`
    }
  })
