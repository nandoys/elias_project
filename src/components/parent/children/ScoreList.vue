<template>
    <v-card flat max-width="1000">
      <v-card-title class="d-flex justify-center pe-2"> 
        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          density="compact"
          label="Recherche"
          single-line
          flat
          hide-details
          variant="solo-filled"
        ></v-text-field>
      </v-card-title>
  
      <v-divider></v-divider>
      <v-data-table v-model:search="search" :items="items">
        <template v-slot:header.name>
          <div class="text-start">Nom du cours</div>
        </template>
        <template v-slot:header.period>
          <div class="text-start">Période</div>
        </template>
        <template v-slot:header.maxScore>
          <div class="text-start">Côte Maximum</div>
        </template>
  
        <template v-slot:header.obtainScore>
            <div class="text-start">Côte obtenu</div>
        </template>
  
      </v-data-table>
    </v-card>
  </template>

<script>
export default {
  data () {
    return {
      search: '',
      items: [
        {
          name: 'Français',
          period: '1ère période',
          maxScore: 100,
          obtainScore: 70,
        },
        {
          name: 'Maths',
          period: '1ère période',
          maxScore: 200,
          obtainScore: 120,
        },
        {
          name: 'Electronique',
          period: '1ère période',
          maxScore: 210,
          obtainScore: 130,
        },
        {
          name: 'Anglais',
          period: '1ère période',
          maxScore: 80,
          obtainScore: 45,
        },
        {
          name: 'Physique',
          period: '1ère période',
          maxScore: 180,
          obtainScore: 70,
        },
      ],
    }
  },
}
</script>