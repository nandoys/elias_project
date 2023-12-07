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
          <div class="text-start">Nom de l'élève</div>
        </template>
        <template v-slot:header.subscribeAt>
          <div class="text-start">Prochain contrôle</div>
        </template>
        <template v-slot:header.validity>
          <div class="text-end">Etat à la caisse</div>
        </template>
  
        <template v-slot:item.image="{ item }">
            <v-avatar
                color="grey-lighten-1"
                size="50"
                :image="item.image"
            ></v-avatar>
        </template>
  
        <template v-slot:item.subscribeAt="{ item }">
          <v-card-text>{{ item.subscribeAt }}</v-card-text>
        </template>
  
        <template v-slot:item.validity="{ item }">
          <div class="text-end">
            <v-chip
              :color="item.validity ? 'green' : 'red'"
              :text="item.validity ? 'En ordre' : 'En retard'"
              class="text-uppercase"
              label
              size="small"
            ></v-chip>
          </div>
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
          name: 'Nebula GTX 3080',
          image: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
          subscribeAt: new Date('03/13/2023').toLocaleDateString(),
          validity: true,
        },
        {
          name: 'Galaxy RTX 3080',
          image: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
          subscribeAt: new Date('03/13/2023').toLocaleDateString(),
          validity: false,
        },
        {
          name: 'Orion RX 6800 XT',
          image: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
          subscribeAt: new Date('04/13/2022').toLocaleDateString(),
          validity: true,
        },
        {
          name: 'Vortex RTX 3090',
          image: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
          subscribeAt: new Date('03/25/2021').toLocaleDateString(),
          validity: true,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
          subscribeAt: new Date('03/13/2023').toLocaleDateString(),
          validity: false,
        },
      ],
    }
  },
}
</script>