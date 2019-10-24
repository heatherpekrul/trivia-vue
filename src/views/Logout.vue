<template>
  <div class="logout"></div>
</template>

<script>
export default {
  name: 'logout',
  created() {
    this.logout();
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout');
        this.$router.push('login');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
