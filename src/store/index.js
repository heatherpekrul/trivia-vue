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
    login({ commit }) {
      console.log('check1');
      const provider = new Firebase.auth.GoogleAuthProvider();
      console.log('check2');
      Firebase.auth().signInWithPopup(provider).then((result) => {
        console.log('check3', result.additionalUserInfo.profile);
        commit('userUpdate', result.additionalUserInfo.profile);
        this.$router.push('home');
      }).catch((err) => {
        console.log('check4');
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
