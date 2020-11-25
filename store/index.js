import Vuex from 'vuex';

const state = {
  examples: [],
};

const mutations = {
  setExamples: (state, payload) => {
    state.examples = payload;
  },
};

const actions = {
  nuxtServerInit(vuexContext, context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        vuexContext.commit('setExamples', ['hai-1', 'hai-2',]);
        resolve()
      }, 1000);
    }).catch(e => context.error(e)); // đẩy về trang lỗi
  },
};

const getters = {
  examples: (state) => {
    return state.examples;
  },
};

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
  });
};

export default createStore;
