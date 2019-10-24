<template>
  <div class="login">
    <h1>Sign In With Google</h1>
    <button @click="login">The Googs</button>
  </div>
</template>

<script>
import Firebase from 'firebase';

export default {
  name: 'login',
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
  },
};
</script>
