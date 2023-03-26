// tours.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => ({
  seo: {},
  data: []
});

export const getters = {
  getTours: (state) => state.data
};

export const mutations = {
  setTours(state, { seo, data }) {
    state.seo = seo;
    state.data = data;
  }
};

export const actions = {
  async fetchTours({ commit, state }, { locale, route }) {
    if (state.data.length) {
      // Если данные уже загружены, возвращаем их из кэша
      return { seo: state.seo, data: state.data }
    } else {
      // Загружаем данные с сервера и сохраняем их в хранилище
      const response = await $axios.get(`tours?lang=${locale}&router=${route.path}`)
      const { seo, data } = response.data
      commit('setTours', { seo, data })
      return { seo, data }
    }
  }
};


export const store = () => new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
