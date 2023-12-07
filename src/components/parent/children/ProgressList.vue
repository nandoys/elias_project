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
        <template v-slot:header.period>
          <div class="text-start">Période</div>
        </template>
        <template v-slot:header.application>
          <div class="text-start">Application</div>
        </template>
        <template v-slot:header.conduct>
          <div class="text-start">Conduite</div>
        </template>
  
        <template v-slot:header.attendance>
            <div class="text-start">Présence</div>
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
            period: '1ère période',
            application: 'Bonne',
            conduct: 'Bonne',
            attendance: '200/220',
        },
        {
            period: '2ème période',
            application: 'Bonne',
            conduct: 'Bonne',
            attendance: '200/220',
        },
        {
            period: '3ème période',
            application: 'Bonne',
            conduct: 'Bonne',
            attendance: '200/220',
        },
        {
            period: '4ème période',
            application: 'Bonne',
            conduct: 'Bonne',
            attendance: '200/220',
        },
      ],
    }
  },
}
</script>