<template>
  <div class="login">
    <h1>Sign In With Google</h1>
    <button @click="login">The Googs</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login');
        this.$router.push('/home');
      } catch (e) {
        console.log('login catch:', e);
      }
    },
  },
};
</script>
