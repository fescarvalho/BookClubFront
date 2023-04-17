import { api } from 'src/services/api'

export const getHighlightedBooks = () =>
  api.get('/book?highlighted=true', {
    headers: {
      Authorization: `beares ${localStorage.getItem('@bookclub_token')}`
    }
  })

export const getBooksByCategory = (id) =>
  api.get(`/book?category_id=${id}`, {
    headers: {
      Authorization: `beares ${localStorage.getItem('@bookclub_token')}`
    }
  })
export const getBookDetail = (id) =>
  api.get(`/book/${id}`, {
    headers: {
      Authorization: `beares ${localStorage.getItem('@bookclub_token')}`
    }
  })
