<template>
    <v-row class="d-flex">
        <v-col cols="6">
            <span class="text-h3">Section d'électronique</span>
            <section>
                L'électronique industrielle est une branche de l'ingénierie électronique qui se concentre sur les systèmes 
                électroniques de qualité industrielle, c'est-à-dire les équipements électroniques utilisés dans l'industrie.
            </section>
        </v-col>
        <v-col cols="6">
            <v-img
                :width="500"
                aspect-ratio="16/9"
                src="@/assets/electronic.jpg"
            ></v-img>
        </v-col>
    </v-row>
</template>

<script>

    export default {
        data () {
            return {
                slides: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                ],
            }
        },
    }

</script>