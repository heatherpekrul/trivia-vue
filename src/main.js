import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import Firebase from 'firebase';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;
Vue.use(firestorePlugin);

let app = '';
const firebaseConfig = {
  apiKey: 'AIzaSyCEmRQHpmDCqghx0HWXooBV3m24_HZrG8o',
  authDomain: 'trivia-f7a41.firebaseapp.com',
  databaseURL: 'https://trivia-f7a41.firebaseio.com',
  projectId: 'trivia-f7a41',
  storageBucket: 'trivia-f7a41.appspot.com',
  messagingSenderId: '72909289005',
  appId: '1:72909289005:web:ff04db4940fdadd32c2aa4',
};

Firebase.initializeApp(firebaseConfig);

Firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      router,
      render: h => h(App),
    }).$mount('#app');
  }
});
