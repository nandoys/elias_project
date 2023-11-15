<template>
  <v-container fluid="">
    <Caroussel />
    <v-container>
      <Mecanic />
      <Electricity />
      <Electronic />
    </v-container>
    <call-to-action />
  </v-container>
</template>

<script setup>
  import Caroussel from '@/components/home/caroussel.vue'
  import Electricity from '@/components/home/electricity.vue'
  import Electronic from '@/components/home/electronic.vue'
  import Mecanic from '@/components/home/mecanic.vue'
  import CallToAction from '@/components/home/call-to-action.vue'
  import FooterBar from '@/components/FooterBar.vue'
</script>
