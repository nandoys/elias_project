<template>
  <v-container fluid="">
    <Caroussel />
    <v-container>
      <Mecanic />
      <Electricity />
      <Electronic />
    </v-container>
    <call-to-action />
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="snackbar = false"
        >
          fermer
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
  import Caroussel from '@/components/home/caroussel.vue'
  import Electricity from '@/components/home/electricity.vue'
  import Electronic from '@/components/home/electronic.vue'
  import Mecanic from '@/components/home/mecanic.vue'
  import CallToAction from '@/components/home/call-to-action.vue'

  export default {
    components: {Caroussel, Electricity, Electronic, Mecanic, CallToAction},
    data: () => ({
      snackbar: false,
      text: 'Inscription envoyée avec succès, Vous serez contacté dans peu de temps. Merci!'
    }),
    mounted() {
      if(this.$route.query.notify){
        this.snackbar = true
        setTimeout(() => {
          this.$router.push('')
        }, 4000)
      }
    }
  }
</script>
