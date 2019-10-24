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
      await this.$store.dispatch('login');
      this.$router.push('/');
    },
  },
};
</script>
