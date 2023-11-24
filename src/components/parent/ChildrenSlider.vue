<template>
    <v-row>
        <v-col>
            <div class="d-flex justify-center mt-12">
                <span class="text-h5">Vos enfants</span>
            </div>
            
            <div class="d-flex justify-center mt-12">
                <v-card
                    max-width="600"
                    elevation="8"
                >
                    <v-carousel
                        :continuous="false"
                        :show-arrows="false"
                        hide-delimiter-background
                        delimiter-icon="mdi-circle"
                        height="80"
                    >
                        <v-carousel-item
                            v-for="(item, i) in items"
                            :key="i"
                        >
                            <v-sheet
                                width="700"
                                height="100%"
                                tile
                            >
                                <v-list-item
                                    :title="item.title"
                                    subtitle="Classe de 4ème Mécanique"
                                    link
                                >
                                <template v-slot:prepend>
                                    <v-avatar
                                    color="grey-lighten-1"
                                    size="50"
                                    image="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                                    ></v-avatar>
                                </template>

                                </v-list-item>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </v-card>
            </div>

            
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        items : [
            {title: 'Elias 1'},
            {title: 'Elias 2'},
            {title: 'Elias 3'},
            {title: 'Elias 4'},
            {title: 'Elias 5'},
        ]
    })
}
</script>