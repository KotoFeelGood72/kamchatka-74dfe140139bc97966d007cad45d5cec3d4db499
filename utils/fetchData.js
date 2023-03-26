// utils/fetchData.js
import { Api } from '../api/api';

export async function fetchData(endpoint, { route, store }) {
  const lang = route.name.includes('_en') ? 'en' : 'ru';
  const response = await Api.get(`${endpoint}?lang=${store.$i18n.locale}&router=${route.path}`);

  // Обработка данных для FAQ, если они существуют
  let processedData = response.data.data;
  if (response.data.data.faq) {
    processedData = response.data.data.faq.map((item) => {
      item.active = false;
      return item;
    });
  }

  return {
    seo: response.data.seo,
    data: processedData,
  };
}
