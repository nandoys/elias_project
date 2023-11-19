<template>
  <v-app-bar flat :elevation="5">
    <v-app-bar-title class="d-flex justify-center">
      <v-btn variant="plain" @click="goTo('Home')">Accueil</v-btn>
      <v-btn variant="plain" @click="goTo('Apply')">Inscription</v-btn>
      <v-btn variant="plain" @click="goTo('Contact')">Contact</v-btn>
    </v-app-bar-title>
    <v-btn variant="text" color="primary"  @click="goTo('Login')">Se connecter</v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    methods: {
      goTo(pathName) {
        this.$router.push({'name': pathName})
      }
    }
  }
</script>
