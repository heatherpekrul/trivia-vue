<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Firebase from 'firebase';
import Nav from '@/components/nav/nav.vue';

export default {
  name: 'App',
  created() {
    if (!this.$store.user) {
      const { currentUser } = Firebase.auth();
      this.$store.commit('userUpdate', currentUser);
    }
  },
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
@import 'assets/scss';
@import '~normalize.css';
@import 'assets/scss/defaults';
</style>
