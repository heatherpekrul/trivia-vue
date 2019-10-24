<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <a href="#" @click="logout">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Firebase from 'firebase';

export default {
  name: 'App',
  methods: {
    login() {
      const provider = new Firebase.auth.GoogleAuthProvider();
      Firebase.auth().signInWithPopup(provider).then((result) => {
        console.log(result);
        this.$router.replace('home');
      }).catch((err) => {
        console.log(err);
      });
    },
    async logout() {
      try {
        await Firebase.auth().signOut();
        console.log('signed out');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>


<style lang="scss">
@import 'assets/scss';
@import 'assets/scss/defaults';
</style>
