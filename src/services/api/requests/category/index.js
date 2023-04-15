import { api } from 'src/services/api';

export const getCategory = () =>
  api.get('/category', {
    headers: {
      Authorization: `beares ${localStorage.getItem('@bookclub_token')}`
    }
  });
