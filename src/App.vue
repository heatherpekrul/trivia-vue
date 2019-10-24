<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login" v-show="!user">Login</router-link> |
      <router-link to="/logout" v-show="user">Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Firebase from 'firebase';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  created() {
    if (!this.$store.user) {
      const { currentUser } = Firebase.auth();
      this.$store.commit('userUpdate', currentUser);
    }
  },
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
};
</script>

<style lang="scss">
@import 'assets/scss';
@import 'assets/scss/defaults';
</style>
