// utils/fetchData.js
import { Api } from '../api/api';

export async function fetchDataPost(endpoint, { route, store }) {
  const lang = route.name.includes('_en') ? 'en' : 'ru';
  const response = await Api.get(`${endpoint}${route.params.id}?lang=${store.$i18n.locale}&router=${route.path}`);

  return {
    seo: response.data.seo,
    data: response.data.data,
  };
}
