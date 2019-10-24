<template>
  <nav class="nav">
    <ul>
      <li class="nav__title">
        trivia
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-show="!user">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-show="user">
        <router-link to="/logout">Logout</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Nav',
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/scss';
@import 'nav';
</style>
