<template>
    <v-row class="bg-primary" justify="center" align-content="center" style="height: 100px">
        <v-banner-actions>
            <v-btn @click="goTo('Apply')">Commencez l'inscritption</v-btn>
        </v-banner-actions>
    </v-row>
  </template>
  
<script>
    export default {
        data () {
            return {}
        },
        methods: {
            goTo(pathName) {
                this.$router.push({'name': pathName})
            }
        }
    }
</script>