import { api } from 'src/services/api';

export const getHighlightedBooks = () =>
  api.get('/book?highlighted=true', {
    headers: {
      Authorization: `beares ${localStorage.getItem('@bookclub_token')}`
    }
  });
