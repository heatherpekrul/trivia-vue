import Vue from 'vue';
import Vuex from 'vuex';
import Firebase from 'firebase';

Vue.use(Vuex);

const defaultState = () => ({
  user: false,
});

export default new Vuex.Store({
  state: defaultState(),
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    userReset(state) {
      state.user = defaultState().user;
    },
    userUpdate(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }) {
      const provider = new Firebase.auth.GoogleAuthProvider();
      await Firebase.auth().signInWithPopup(provider).then((result) => {
        commit('userUpdate', result.additionalUserInfo.profile);
      }).catch((err) => {
        console.log(err);
      });
    },
    async logout({ commit }) {
      await Firebase.auth().signOut();
      commit('userReset');
    },
  },
  modules: {
  },
});
